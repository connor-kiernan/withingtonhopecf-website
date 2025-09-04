import DateAndCompetition from "./DateAndCompetition";
import FixtureDetails from "./FixtureDetails";
import ResultDetails from "./ResultDetails";

const MatchRow = ({isHomeGame, opponent, address, kickOffDateTime, played, homeGoals, awayGoals, competition, key}) => {
  const withingtonHope = "Withington Hope";
  const [homeTeam, awayTeam] = isHomeGame ? [withingtonHope, opponent] : [opponent, withingtonHope];

  const addressComponents = [address["line1"], address["line2"], address["postcode"].toUpperCase()];

  const homeTeamDetails = {
    name: homeTeam,
    goals: homeGoals,
  }

  const awayTeamDetails = {
    name: awayTeam,
    goals: awayGoals,
  }

  const details = played ?
      <ResultDetails homeTeamDetails={homeTeamDetails} awayTeamDetails={awayTeamDetails} />
      : <FixtureDetails homeTeamDetails={homeTeamDetails} awayTeamDetails={awayTeamDetails}/>;

  return (
      <div className="match-row">
        <DateAndCompetition date={kickOffDateTime} competition={competition}/>
        {details}
        <div className="text-capitalize fs-6 address">
          <div className="d-none d-sm-block">
            {addressComponents.map(addressSection =>
                (<p key={`${key}_${addressSection}`} className="mb-0">{addressSection}</p>)
            )}
          </div>
          <div className="d-block d-sm-none">
            <p>{addressComponents.join(", ")}</p>
          </div>
        </div>
      </div>
  );
};

export default MatchRow;