import {Col, Row} from "react-bootstrap";
import Date from "./Date";
import FixtureDetails from "./FixtureDetails";
import ResultDetails from "./ResultDetails";

const Match = ({isHomeGame, opponent, address, kickOffDateTime, played, homeGoals, awayGoals, key}) => {
  const withingtonHope = "Withington Hope";
  const [homeTeam, awayTeam] = isHomeGame ? [withingtonHope, opponent] : [opponent, withingtonHope];

  const addressComponents = [address["line1"], address["line2"], address["postcode"].toUpperCase()];

  const middleComponent = played ?
      <ResultDetails homeTeam={homeTeam} awayTeam={awayTeam} homeGoals={homeGoals} awayGoals={awayGoals} />
      : <FixtureDetails homeTeam={homeTeam} awayTeam={awayTeam}/>;

  return (
      <Row className="text-center align-items-center">
        <Col lg={2}>
          <p className="mb-lg-0 mb-2"><Date date={kickOffDateTime}/></p>
        </Col>
        <Col>{middleComponent}</Col>
        <Col lg={2} className="text-capitalize">
          {addressComponents.map(addressSection =>
              (<p key={`${key}_${addressSection}`} className="mb-0">{addressSection}</p>)
          )}
        </Col>
      </Row>
  );
};

export default Match;