import {selectFixturesGroupedByMonth, selectNextFixture} from "../features/matches/matchSlice";
import {useSelector} from "react-redux";
import MatchGroup from "./MatchGroup";
import HighlightMatch from "./HighlightMatch";

const FixtureContainer = () => {
  const nextFixture = useSelector(selectNextFixture);
  const fixturesGroupedByMonth = useSelector(selectFixturesGroupedByMonth);

  return (
      <>
        <HighlightMatch {...nextFixture}/>
        {Object.entries(fixturesGroupedByMonth).map(([month, fixtures]) =>
            (<MatchGroup key={month} group={month} fixtures={fixtures}/>)
        )}
      </>
  );
};

export default FixtureContainer;