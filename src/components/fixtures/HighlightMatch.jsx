import NextMatchTime from "./NextMatchTime";
import LastMatchScore from "./LastMatchScore";

const HighlightMatch = ({
      isHomeGame,
      opponent,
      kickOffDateTime,
      address,
      played,
      homeGoals,
      awayGoals,
      withyGoalScorers
    }) => {
      const withingtonHope = "Withington Hope";
      const [homeTeam, awayTeam] = isHomeGame ? [withingtonHope, opponent] : [opponent, withingtonHope];

      const heading = played ? "Last Match" : "Next Match";

      const middleComponent = played ?
          <LastMatchScore homeTeam={homeTeam} awayTeam={awayTeam} homeGoals={homeGoals} awayGoals={awayGoals} isHomeGame={isHomeGame} withyGoalScorers={withyGoalScorers}/> :
          <NextMatchTime homeTeam={homeTeam} kickOffDateTime={kickOffDateTime} awayTeam={awayTeam}/>;

      return (
          <section className="text-center mt-2 mb-5 mx-lg-n p-1 py-sm-4 rounded border highlightMatch">
            <h1>{heading}</h1>
            <div className="d-flex justify-content-center fs-5 mb-4">
              <p>{new Date(kickOffDateTime).toLocaleDateString('en-GB', { day: 'numeric', month: 'short'})}, {address["line1"] ?? address["postcode"]}</p>
            </div>
            {middleComponent}
          </section>);
    }
;

export default HighlightMatch;