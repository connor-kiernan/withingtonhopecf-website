import {Col, Row} from "react-bootstrap";

const ResultTeamScore = ({team, goals, goalScorers, isAway}) => {
  const className = "text-start justify-content-lg-end " + (isAway ? "flex-lg-row-reverse" : "text-lg-end");
  return (
      <Row className={className + " px-3 mb-4"}>
        <Col className="px-1">
          <p className="mb-0">{team}</p>
          <Row className={className}>
            <Col md={8} className={"fs-5 " + className}>
              <Row className={className}>
                {goalScorers ? Object.entries(goalScorers)
                .map(([player, count]) => (
                    <Row key={player + count} className={className}>
                      <Col xs={6}>
                        <small>{player}</small>
                      </Col>
                      <Col xs={6} lg={4} xl={3}>
                        <small><i className="fa-regular fa-futbol"></i>{count > 1 ? " x" + count : null}</small>
                      </Col>
                    </Row>
                )) : null}
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={"auto"}><p className="shadow-lg rounded bg-white text-primary mb-0 px-2">{goals}</p></Col>
      </Row>
  );
};

export default ResultTeamScore;