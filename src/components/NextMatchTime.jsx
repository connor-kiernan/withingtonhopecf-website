import {Col, Row} from "react-bootstrap";

const NextMatchTime = ({awayTeam, homeTeam, kickOffDateTime}) => {
  const koTime = kickOffDateTime.toLocaleTimeString("en-GB", {
    hour: "numeric", minute: "numeric", hour12: false
  });

  return (
      <Row className="display-5 gx-1 justify-content-evenly">
        <Col>{homeTeam}</Col>
        <Col lg={1}><span className="fs-2 rounded bg-secondary-subtle px-1 mx-1 text-light-emphasis">{koTime}</span></Col>
        <Col>{awayTeam}</Col>
      </Row>
  );
};

export default NextMatchTime;