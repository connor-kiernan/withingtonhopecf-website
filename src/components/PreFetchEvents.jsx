import {Outlet} from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import {useGetMatchesQuery} from "../features/matches/matchSlice";

const PreFetchEvents = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetMatchesQuery();

  if (isLoading) {
    return <LoadingScreen />
  } else if (isSuccess) {
    return <Outlet />;
  } else if (isError) {
    return <p>Unknown error when fetching matches: {JSON.stringify(error)}</p>;
  }
};

export default PreFetchEvents;