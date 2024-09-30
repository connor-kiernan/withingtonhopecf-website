import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_HAPI_URL }),
  tagTypes: ['Player', 'Match', 'Config'],
  endpoints: () => ({})
});
