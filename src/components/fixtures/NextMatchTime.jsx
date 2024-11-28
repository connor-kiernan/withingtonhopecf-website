import {Col, Row} from "react-bootstrap";
import TeamLabel from "./TeamLabel";

const NextMatchTime = ({awayTeam, homeTeam, kickOffDateTime}) => {
  const koTime = new Date(kickOffDateTime).toLocaleTimeString("en-GB", {
    hour: "numeric", minute: "numeric", hour12: false
  });

  return (
      <Row className="highlight text-uppercase justify-content-evenly align-items-center">
        <Col><TeamLabel team={homeTeam} /></Col>
        <Col xs="auto"><span className="rounded bg-primary py-2 px-3 mx-1 text-white">{koTime}</span></Col>
        <Col><TeamLabel team={awayTeam} isAway={true} /></Col>
      </Row>
  );
};

export default NextMatchTime;