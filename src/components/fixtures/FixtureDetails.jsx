import {MatchDetails} from "./MatchDetails";

const FixtureDetails = ({homeTeamDetails, awayTeamDetails, isHighlight = false, kickOffDateTime}) => {
  const koTime = new Date(kickOffDateTime).toLocaleTimeString("en-GB", {
    hour: "numeric", minute: "numeric", hour12: false
  });

  const middleComponent = isHighlight ? <span className="rounded bg-primary py-2 px-3 mx-1 text-white display-6">{koTime}</span>
      : <h1 className="display-6">vs</h1>;

  return (
      <MatchDetails homeTeamDetails={homeTeamDetails} awayTeamDetails={awayTeamDetails} middleComponent={middleComponent}/>
  );
};

export default FixtureDetails;