import {Card, Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const PlayerCard = ({imageUrl, firstName, lastName, position, kitNumber}) => {
  return (
      <Card className="h-100">
        <Row xs={1} className="g-0 align-items-stretch">
          <Col>
            <div className="position-relative bg-primary">
              {kitNumber &&
                  <div className="position-absolute top-0 start-0">
                    <h1 className="display-4 fw-semibold ms-3 mt-1 text-white">{kitNumber}</h1>
                  </div>
              }
              <Image className="card-img" fluid
                     src={imageUrl ? `${process.env.REACT_APP_HOSTED_URL}/images/upload/players/profile/away/${imageUrl}`
                         : "/images/blankProfile.png"} alt={`A picture of ${firstName} ${lastName}`}/>
            </div>
          </Col>
          <Col>
            <Card.Body className="pb-1">
              <Row>
                <Col>
                  <Card.Subtitle className="text-capitalize text-body-secondary">{firstName}</Card.Subtitle>
                  <Card.Title as="h2" className="text-capitalize">{lastName}</Card.Title>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
  );
};

export default PlayerCard;