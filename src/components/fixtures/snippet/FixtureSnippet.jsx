import {useSelector} from "react-redux";
import {selectLastResult, selectNextFixture, selectSeasons} from "../../../features/matches/matchSlice";
import {ListGroup} from "react-bootstrap";
import SnippetItem from "./SnippetItem";

const FixtureSnippet = () => {
  const seasons = useSelector(selectSeasons);
  const currentSeason = seasons[0];

  const highlights = [useSelector(selectLastResult(currentSeason)), useSelector(selectNextFixture(currentSeason))].filter(item => item);

  const className = highlights.length === 2 ? "" : "mw-50-sm"

  return (
      <ListGroup horizontal="sm">
        {highlights.map((fixture) => <ListGroup.Item className={className}><SnippetItem {...fixture} /></ListGroup.Item>)}
      </ListGroup>
  )
}

export default FixtureSnippet;