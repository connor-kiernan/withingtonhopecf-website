import {Col, Row} from "react-bootstrap";
import TeamLabel from "./TeamLabel";

const FixtureDetails = ({homeTeam, awayTeam}) => (
    <Row className="fs-4 align-items-top align-items-md-center">
      <Col>
        <TeamLabel team={homeTeam} />
      </Col>
      <Col xs="auto" className="align-self-center">vs</Col>
      <Col>
        <TeamLabel team={awayTeam} isAway={true} />
      </Col>
    </Row>
);

export default FixtureDetails;