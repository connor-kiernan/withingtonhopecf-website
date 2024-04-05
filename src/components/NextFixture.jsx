import Date from "./Date";
import {Col, Row} from "react-bootstrap";

const NextFixture = ({fixture}) => {
  const withingtonHope = "Withington Hope";
  const [homeTeam, awayTeam] = fixture["isHomeGame"] ?
      [withingtonHope, fixture["opponent"]] : [fixture["opponent"], withingtonHope];

  const koTime = fixture["kickOffDateTime"].toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hour12: false
  });

  return (
      <section className="text-center mt-2 mb-5 pb-5">
        <h1>Next Match</h1>
        <div className="d-flex justify-content-center">
          <Date date={fixture["kickOffDateTime"]} withTime={false}/>
          <p>, {fixture["address"]["line1"] ?? fixture["address"]["postcode"]}</p>
        </div>
        <Row className="display-5 gx-1 justify-content-evenly">
          <Col>{homeTeam}</Col>
          <Col lg={1}><span className="fs-2 rounded bg-secondary-subtle px-1 mx-1 text-light-emphasis">{koTime}</span></Col>
          <Col>{awayTeam}</Col>
        </Row>
      </section>
  );
};

export default NextFixture;