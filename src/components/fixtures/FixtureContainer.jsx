import {selectFixturesGroupedByMonth, selectNextFixture} from "../../features/matches/matchSlice";
import {useSelector} from "react-redux";
import MatchGroup from "./MatchGroup";
import HighlightMatch from "./HighlightMatch";

const FixtureContainer = ({season}) => {
  const nextFixture = useSelector(selectNextFixture(season));
  const fixturesGroupedByMonth = useSelector(selectFixturesGroupedByMonth(season));

  if (!nextFixture) {
    return <><p>Sorry, there are no upcoming fixtures to display</p><p>Check back soon!</p></>
  }

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