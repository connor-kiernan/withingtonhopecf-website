import {Col, Row} from "react-bootstrap";
import ResultTeamScore from "./ResultTeamScore";

const ResultDetails = ({homeTeam, awayTeam, homeGoals, awayGoals}) => {
  return (
      <Row className="fs-3 gx-0">
        <Col lg>
          <ResultTeamScore team={homeTeam} goals={homeGoals} />
        </Col>
        <Col lg>
          <ResultTeamScore team={awayTeam} goals={awayGoals} isAway={true}/>
        </Col>
      </Row>
  );
}

export default ResultDetails;