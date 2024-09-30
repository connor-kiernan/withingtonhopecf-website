import {createEntityAdapter, createSelector} from "@reduxjs/toolkit";
import {apiSlice} from "../../api/apiSlice";

const configAdapter = createEntityAdapter({
  selectId: obj => obj[0],
});

const initialState = configAdapter.getInitialState({});

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getConfig: builder.query({
      query: () => "/config",
      transformResponse: responseData => {
        return configAdapter.setAll(initialState, Object.entries(responseData));
      },
      providesTags: {type: "Config"}
    })
  })
});

export const {
  useGetConfigQuery
} = extendedApiSlice;

export const selectConfigResult = extendedApiSlice.endpoints.getConfig.select();

const selectConfigData = createSelector(
    selectConfigResult,
    configResult => {
      return configResult.data
    }
);

export const {
  selectById
} = configAdapter.getSelectors(state => selectConfigData(state) ?? initialState);