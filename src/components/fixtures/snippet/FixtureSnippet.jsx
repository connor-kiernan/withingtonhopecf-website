import {useSelector} from "react-redux";
import {selectLastResult, selectNextFixture, selectSeasons} from "../../../features/matches/matchSlice";
import {ListGroup} from "react-bootstrap";
import SnippetItem from "./SnippetItem";

const FixtureSnippet = () => {
  const seasons = useSelector(selectSeasons);
  const currentSeason = seasons[0];
  const highlights = [useSelector(selectLastResult(currentSeason)), useSelector(selectNextFixture(currentSeason))];

  return (
      <ListGroup horizontal="sm">
        {highlights.map((fixture) => <ListGroup.Item><SnippetItem {...fixture} /></ListGroup.Item>)}
      </ListGroup>
  )
}

export default FixtureSnippet;