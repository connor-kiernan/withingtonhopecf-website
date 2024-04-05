import {createEntityAdapter, createSelector} from "@reduxjs/toolkit";
import {apiSlice} from "../../api/apiSlice";

const matchesAdapter = createEntityAdapter({
  sortComparer: (a, b) => a["kickOffDateTime"] - b["kickOffDateTime"]
});

const initialState = matchesAdapter.getInitialState({});

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMatches: builder.query({
      query: () => "/matches",
      transformResponse: responseData => {
        responseData.map(match => match["kickOffDateTime"] = new Date(match["kickOffDateTime"]));
        return matchesAdapter.setAll(initialState, responseData)
      },
      providesTags: {type: "Match", id: "LIST"}
    })
  })
});

export const {
  useGetMatchesQuery
} = extendedApiSlice;

export const selectMatchesResult = extendedApiSlice.endpoints.getMatches.select();

const selectMatchesData = createSelector(
    selectMatchesResult,
    matchesResult => {
      return matchesResult.data
    }
);

export const {
  selectAll: selectAllMatches
} = matchesAdapter.getSelectors(state => selectMatchesData(state) ?? initialState);

export const selectResults = createSelector(
    selectAllMatches,
    matches => {
      return matches.filter(match => match["played"]);
    }
);

export const selectFixtures = createSelector(
    selectAllMatches,
    matches => {
      return matches.filter(match => !match["played"]);
    }
);

export const selectNextFixture = createSelector(
    selectFixtures,
    fixtures => fixtures[0]
)

export const selectLastResult = createSelector(
    selectResults,
    results => results[results.length -1]
)

export const selectFixturesGroupedByMonth = createSelector(
    selectFixtures,
    fixtures => groupByMonth(fixtures)
)

export const selectResultsGroupedByMonth = createSelector(
    selectResults,
    results => groupByMonth(results)
)

function groupByMonth(matches) {
  return matches.reduce((group, result) => {
    const month = result["kickOffDateTime"].toLocaleDateString("en-GB", {month: "long"});
    (group[month] = group[month] || []).push(result);

    return group;
  }, {});
}

