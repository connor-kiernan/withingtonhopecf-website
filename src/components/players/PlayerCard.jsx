import {Card, Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const PlayerCard = ({imageUrl, firstName, lastName, position, kitNumber}) => {
  let kitNumberCol = kitNumber ? <Col xxl={{order: "last", span: 4}} className="px-xxl-1">
                      <h1 className="display-4 text-xxl-end">{kitNumber}</h1>
                      </Col> : null;
  return (
      <Card className="h-100">
        <Row className="g-0 align-items-stretch align-items-md-center">
          <Col xs={6} md={12} className="text-center">
            <Image className="card-img" fluid
                   src={imageUrl ? `${process.env.REACT_APP_HOSTED_URL}/images/upload/players/profile/away/${imageUrl}`
                       : "/images/blankProfile.png"} alt={`A picture of ${firstName} ${lastName}`}/>
          </Col>
          <Col xs={6} md={12}>
            <Card.Body className="py-auto px-1 px-md-3">
              <Row>
                {kitNumberCol}
                <Col xxl={8} className="pe-md-0">
                  <Card.Subtitle className="text-capitalize text-body-secondary">{firstName}</Card.Subtitle>
                  <Card.Title as="h2" className="text-capitalize">{lastName}</Card.Title>
                </Col>
              </Row>
              <Card.Text>{position["qualifiedPosition"]}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
  );
};

export default PlayerCard;