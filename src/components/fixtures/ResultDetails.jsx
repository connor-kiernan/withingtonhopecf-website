import {Col, Row} from "react-bootstrap";
import TeamLabel from "./TeamLabel";
import Score from "./Score";

const ResultDetails = ({homeTeam, awayTeam, homeGoals, awayGoals}) => {
  return (
      <Row className="fs-4 align-items-center">
        <Col>
          <TeamLabel team={homeTeam} />
        </Col>
        <Col xs={"auto"}><Score homeGoals={homeGoals} awayGoals={awayGoals}></Score></Col>
        <Col>
          <TeamLabel team={awayTeam} isAway={true}/>
        </Col>
      </Row>
  );
}

export default ResultDetails;