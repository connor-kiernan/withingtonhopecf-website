import {useGetMatchesQuery} from "../../features/matches/matchSlice";
import {Spinner} from "react-bootstrap";
import MatchesNavContainer from "./MatchesNavContainer";

const MatchesContainer = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetMatchesQuery();

  if (isLoading) {
    return (<Spinner animation="border" role="status" variant="secondary">
              <span className="visually-hidden">Loading...</span>
            </Spinner>);
  }

  if (isSuccess) {
    return (
        <MatchesNavContainer />
    );
  }

  if (isError) {
    return <p>Unknown error when fetching matches: {JSON.stringify(error)}</p>;
  }

};

export default MatchesContainer;