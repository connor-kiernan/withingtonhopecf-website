import LastMatchScore from "../LastMatchScore";
import NextMatchTime from "../NextMatchTime";
import Competition from "../Competition";

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

  const middleComponent = played ?
      <LastMatchScore homeTeam={homeTeam} awayTeam={awayTeam} homeGoals={homeGoals} awayGoals={awayGoals} isHomeGame={isHomeGame} /> :
      <NextMatchTime homeTeam={homeTeam} kickOffDateTime={kickOffDateTime} awayTeam={awayTeam}/>;

  return (
      <section className="text-center snippetMatch">
        <h1>{heading}</h1>
        <h5><Competition competition={competition} /></h5>
        <div className="d-flex justify-content-center mb-4">
          <p>{new Date(kickOffDateTime).toLocaleDateString('en-GB', { day: 'numeric', month: 'short'})}, {address["line1"] ?? address["postcode"]}</p>
        </div>
        {middleComponent}
      </section>);
}

export default SnippetItem;