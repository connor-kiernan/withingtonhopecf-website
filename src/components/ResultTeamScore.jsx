import {Col, Row} from "react-bootstrap";
import {Fragment} from "react";

const ResultTeamScore = ({team, goals, goalScorers, isAway}) => {
  const className = "text-start " + (isAway ? "flex-lg-row-reverse" : "text-lg-end justify-content-lg-end");
  return (
      <Row className={className + " px-3 mb-4"}>
        <Col className="px-1">
          <p className="mb-0">{team}</p>
          <div className={"d-flex fs-5 " + className}>
            {goalScorers ? Object.entries(goalScorers)
            .map(([player, count]) => (
                <Fragment key={player + count}>
                  <small className="px-lg-5 ps-1 pe-5">{player}</small>
                  <small> <i className="fa-regular fa-futbol"></i> x {count}</small>
                </Fragment>
            )) : null}
          </div>
        </Col>
        <Col xs={"auto"}><p className="shadow-lg rounded bg-white text-primary mb-0 px-2">{goals}</p></Col>
      </Row>
  );
};

export default ResultTeamScore;