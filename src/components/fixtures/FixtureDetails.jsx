import {Col, Row} from "react-bootstrap";

const FixtureDetails = ({homeTeam, awayTeam}) => (
  <Row className="fs-4 fw-bold gx-1 justify-content-evenly text-capitalize">
    <Col>{homeTeam}</Col>
    <Col sm={1} className="fw-normal text-lowercase">vs</Col>
    <Col>{awayTeam}</Col>
  </Row>
);

export default FixtureDetails;