import {createEntityAdapter, createSelector} from "@reduxjs/toolkit";
import {apiSlice} from "../../api/apiSlice";

const playersAdapter = createEntityAdapter({
  selectId: player => player["username"],
  sortComparer: (a, b) => (a["kitNumber"] || 100) - (b["kitNumber"] || 100)
});

const initialState = playersAdapter.getInitialState({});

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPlayers: builder.query({
      query: () => "/players",
      transformResponse: responseData => playersAdapter.setAll(initialState, responseData),
      providesTags: {type: "Player", id: "LIST"}
    })
  })
});

export const {
  useGetPlayersQuery
} = extendedApiSlice;

export const selectPlayersResult = extendedApiSlice.endpoints.getPlayers.select();

const selectPlayersData = createSelector(
    selectPlayersResult,
    playersResult => {
      return playersResult.data
    }
);

export const {
  selectAll: selectAllPlayers
} = playersAdapter.getSelectors(state => selectPlayersData(state) ?? initialState);

export const selectGroupedPlayers = createSelector(
    selectAllPlayers,
    players => {
      const groupedPlayers = players.reduce((group, player) => {
        (group[player["position"]["positionGroup"]] = group[player["position"]["positionGroup"]] || []).push(player);

        return group;
      }, {});

      const positionsInOrder = ["GOALKEEPER", "DEFENDER", "MIDFIELDER", "ATTACKER"];
      return Object.entries(groupedPlayers).sort((a, b) => positionsInOrder.indexOf(a[0]) - positionsInOrder.indexOf(b[0]));
    }
);
