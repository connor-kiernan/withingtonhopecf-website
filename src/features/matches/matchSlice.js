import {createEntityAdapter, createSelector} from "@reduxjs/toolkit";
import {apiSlice} from "../../api/apiSlice";

const matchesAdapter = createEntityAdapter({
  sortComparer: ({kickOffDateTime: dateTimeA}, {kickOffDateTime: dateTimeB}) => new Date(dateTimeA) - new Date(dateTimeB)
});

const initialState = matchesAdapter.getInitialState({});

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMatches: builder.query({
      query: () => "/matches",
      transformResponse: responseData => matchesAdapter.setAll(initialState, responseData),
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
      return matchesResult.data;
    }
);

export const {
  selectAll: selectAllMatches
} = matchesAdapter.getSelectors(state => selectMatchesData(state) ?? initialState);

export const selectMatchesBySeason = season => createSelector(
    selectAllMatches,
    matches => matches.filter(match => match.season === season)
);

export const selectResults = season => createSelector(
    selectMatchesBySeason(season),
    matches => matches.filter(match => match.played)
);

export const selectFixtures = season => createSelector(
    selectMatchesBySeason(season),
    matches => matches.filter(match => !match.played)
);

export const selectNextFixture = season => createSelector(
    selectFixtures(season),
    fixtures => fixtures[0]
)

export const selectLastResult = season => createSelector(
    selectResults(season),
    results => results[results.length - 1]
);

export const selectFixturesGroupedByMonth = season => createSelector(
    selectFixtures(season),
    fixtures => groupByMonth(fixtures)
);

export const selectResultsGroupedByMonth = season => createSelector(
    selectResults(season),
    results => groupByMonth(results)
);

export const selectSeasons = createSelector(
    selectAllMatches,
    matches => {
      return [...new Set(matches.map(match => match["season"]).sort(
          (a, b) => parseInt(b.split("/")[0], 10) - parseInt(a.split("/")[0], 10)))];
    }
);

function groupByMonth(matches) {
  return matches.reduce((group, result) => {
    const month = new Date(result["kickOffDateTime"]).toLocaleDateString("en-GB", {month: "long", year: "numeric"});
    (group[month] = group[month] || []).push(result);

    return group;
  }, {});
}

