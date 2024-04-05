import {useGetMatchesQuery} from "../features/matches/matchSlice";
import {Spinner} from "react-bootstrap";
import FixtureContainer from "./FixtureContainer";
import MatchesNavContainer from "./MatchesNavContainer";
import ResultsContainer from "./ResultsContainer";

const MatchesContainer = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetMatchesQuery();

  let renderedContainer;
  if (isLoading) {
    renderedContainer =
        <Spinner animation="border" role="status" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>;
  } else if (isSuccess) {
    renderedContainer = (
        <MatchesNavContainer fixturesContainer={<FixtureContainer />} resultsContainer={<ResultsContainer />} />
    );
  } else if (isError) {
    renderedContainer = <p>Unknown error when fetching matches: {JSON.stringify(error)}</p>;
  }

  return (renderedContainer);
};

export default MatchesContainer;