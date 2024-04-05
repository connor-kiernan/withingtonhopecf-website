import {Col, Row} from "react-bootstrap";
import Date from "./Date";

const Fixture = ({fixture}) => {
  const withingtonHope = "Withington Hope";
  const [homeTeam, awayTeam] = fixture["isHomeGame"] ?
      [withingtonHope, fixture["opponent"]] : [fixture["opponent"], withingtonHope,]

  const addressComponents = [fixture["address"]["line1"], fixture["address"]["line2"], fixture["address"]["postcode"].toUpperCase()];

  return (
      <Row className="text-center align-items-center">
        <Col lg={2}>
          <Date date={fixture["kickOffDateTime"]} />
        </Col>
        <Col>
          <Row className="fs-4 fw-bold gx-1 justify-content-evenly text-capitalize">
            <Col>{homeTeam}</Col>
            <Col sm={1} className="fw-normal text-lowercase">vs</Col>
            <Col>{awayTeam}</Col>
          </Row>
        </Col>
        <Col lg={2} className="text-capitalize">
          {addressComponents.map(addressSection =>
              (<p key={`${fixture["id"]}_${addressSection}`} className="mb-0">{addressSection}</p>)
          )}
        </Col>
      </Row>
  );
};

export default Fixture;