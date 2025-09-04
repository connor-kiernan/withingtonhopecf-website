import {Outlet} from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import {useGetPlayersQuery} from "../features/players/playerSlice";

const PreFetchPlayers = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPlayersQuery();

  if (isLoading) {
    return <LoadingScreen />
  } else if (isSuccess) {
    return <Outlet />;
  } else if (isError) {
    return <p>Unknown error when fetching players: {JSON.stringify(error)}</p>;
  }
};

export default PreFetchPlayers;