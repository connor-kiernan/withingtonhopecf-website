import {selectFixturesGroupedByMonth, selectNextFixture} from "../features/matches/matchSlice";
import {useSelector} from "react-redux";
import FixtureGroup from "./FixtureGroup";
import NextFixture from "./NextFixture";

const FixtureContainer = () => {
  const nextFixture = useSelector(selectNextFixture);
  const fixturesGroupedByMonth = useSelector(selectFixturesGroupedByMonth);

  const fixtureGroups = [];
  Object.entries(fixturesGroupedByMonth).forEach(([month, fixtures]) =>
      fixtureGroups.push(<FixtureGroup key={month} group={month} fixtures={fixtures}/>)
  );

  return (
      <>
        <NextFixture key={"nextFixture"} fixture={nextFixture}/>
        {Object.entries(fixturesGroupedByMonth).map(([month, fixtures]) =>
            (<FixtureGroup key={month} group={month} fixtures={fixtures}/>)
        )}
      </>
  );
};

export default FixtureContainer;