import Competition from "../Competition";
import ResultDetails from "../ResultDetails";
import FixtureDetails from "../FixtureDetails";
import {Link} from "react-router-dom";

const SnippetItem = ({
  isHomeGame,
  opponent,
  kickOffDateTime,
  address,
  played,
  homeGoals,
  awayGoals,
  competition
}) => {
  const withingtonHope = "Withington Hope";
  const [homeTeam, awayTeam] = isHomeGame ? [withingtonHope, opponent] : [opponent, withingtonHope];

  const heading = played ? "Last Match" : "Next Match";

  const homeTeamDetails = {
    name: homeTeam,
    goals: homeGoals
  };

  const awayTeamDetails = {
    name: awayTeam,
    goals: awayGoals
  };

  const details = played ?
      <ResultDetails homeTeamDetails={homeTeamDetails} awayTeamDetails={awayTeamDetails}/> :
      <FixtureDetails homeTeamDetails={homeTeamDetails} awayTeamDetails={awayTeamDetails} isHighlight={true}
                      kickOffDateTime={kickOffDateTime}/>;

  const destination = played ? "/matches/results" : "/matches/fixtures"

  return (
      <Link to={destination} className="text-decoration-none text-reset" onClick={() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }}>
        <section className="text-center snippet-match">
          <h1 className="heading text-decoration-underline">{heading}</h1>
          <h4 className="competition mb-0"><Competition competition={competition}/></h4>
          <div className="address d-flex justify-content-center fs-5">
            <p>{new Date(kickOffDateTime).toLocaleDateString("en-GB", {day: "numeric", month: "short"})}, {address["line1"]
                ?? address["postcode"]}</p>
          </div>
          {details}
        </section>
      </Link>);
};

export default SnippetItem;