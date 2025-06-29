import {useGetMatchesQuery} from "../../../features/matches/matchSlice";
import {Spinner} from "react-bootstrap";
import FixtureSnippet from "./FixtureSnippet";

const FixtureSnippetContainer = () => {
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
        <FixtureSnippet />
    );
  }

  if (isError) {
    return <p>Unknown error when fetching matches: {JSON.stringify(error)}</p>;
  }

};

export default FixtureSnippetContainer;