import {Col, Row} from "react-bootstrap";
import DateAndCompetition from "./DateAndCompetition";
import FixtureDetails from "./FixtureDetails";
import ResultDetails from "./ResultDetails";

const Match = ({isHomeGame, opponent, address, kickOffDateTime, played, homeGoals, awayGoals, competition, key}) => {
  const withingtonHope = "Withington Hope";
  const [homeTeam, awayTeam] = isHomeGame ? [withingtonHope, opponent] : [opponent, withingtonHope];

  const addressComponents = [address["line1"], address["line2"], address["postcode"].toUpperCase()];

  const middleComponent = played ?
      <ResultDetails homeTeam={homeTeam} awayTeam={awayTeam} homeGoals={homeGoals} awayGoals={awayGoals}/>
      : <FixtureDetails homeTeam={homeTeam} awayTeam={awayTeam}/>;

  return (
      <Row className="text-center align-items-center matchRow gy-3">
        <Col sm={2}>
          <DateAndCompetition date={kickOffDateTime} competition={competition}/>
        </Col>
        <Col>{middleComponent}</Col>
        <Col sm={2} className="text-capitalize fs-6">
          <div className="d-none d-sm-block">
            {addressComponents.map(addressSection =>
                (<p key={`${key}_${addressSection}`} className="mb-0">{addressSection}</p>)
            )}
          </div>
          <div className="d-block d-sm-none">
            <p>{addressComponents.join(", ")}</p>
          </div>
        </Col>
      </Row>
  );
};

export default Match;