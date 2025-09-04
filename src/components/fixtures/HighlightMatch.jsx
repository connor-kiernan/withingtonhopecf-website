import Competition from "./Competition";
import ResultDetails from "./ResultDetails";
import FixtureDetails from "./FixtureDetails";

const HighlightMatch = ({
      isHomeGame,
      opponent,
      kickOffDateTime,
      address,
      played,
      homeGoals,
      awayGoals,
      withyGoalScorers,
      competition
    }) => {
      const withingtonHope = "Withington Hope";
      const [homeTeam, awayTeam] = isHomeGame ? [withingtonHope, opponent] : [opponent, withingtonHope];
      const [homeTeamGoalScorers, awayTeamGoalScorers] = isHomeGame ? [withyGoalScorers, null] : [null, withyGoalScorers];

      const heading = played ? "Last Match" : "Next Match";

      const homeTeamDetails = {
        name: homeTeam,
        goals: homeGoals,
        goalScorers: homeTeamGoalScorers
      };

      const awayTeamDetails = {
        name: awayTeam,
        goals: awayGoals,
        goalScorers: awayTeamGoalScorers
      };

      const details = played ?
          <ResultDetails homeTeamDetails={homeTeamDetails} awayTeamDetails={awayTeamDetails} isHighlight={true} />
          : <FixtureDetails homeTeamDetails={homeTeamDetails} awayTeamDetails={awayTeamDetails} kickOffDateTime={kickOffDateTime} isHighlight={true}/>;

      return (
          <section className="text-center mt-2 mb-5 p-1 py-sm-4 rounded border highlight-match">
            <h1 className="heading">{heading}</h1>
            <h4 className="competition mb-0"><Competition competition={competition}/></h4>
            <div className="address d-flex justify-content-center fs-5">
              <p>{new Date(kickOffDateTime).toLocaleDateString("en-GB", {day: "numeric", month: "short"})}, {address["line1"]
                  ?? address["postcode"]}</p>
            </div>
            {details}
          </section>);
    }
;

export default HighlightMatch;