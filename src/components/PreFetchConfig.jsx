import {Outlet} from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import {useGetConfigQuery} from "../features/config/configSlice";

const PreFetchConfig = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetConfigQuery();

  if (isLoading) {
    return <LoadingScreen />
  } else if (isSuccess) {
    return <Outlet />;
  } else if (isError) {
    return <p>Unknown error when fetching config: {JSON.stringify(error)}</p>;
  }
};

export default PreFetchConfig;