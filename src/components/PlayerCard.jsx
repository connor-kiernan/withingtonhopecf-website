import {Card, Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const PlayerCard = ({imageUrl, firstName, lastName, position, kitNumber}) => {
  let kitNumberCol = kitNumber ? <Col md={{order: "last", span: 3}} className="px-md-1">
                      <h1 className="display-5 text-md-end">{kitNumber}</h1>
                      </Col> : null;
  return (
      <Card className="h-100">
        <Row className="g-0 align-items-stretch align-items-md-center">
          <Col xs={6} sm={12} className="text-center">
            <Image className=" card-img" fluid
                   src={imageUrl ? `${process.env.REACT_APP_HOSTED_URL}/images/upload/players/profile/away/${imageUrl}`
                       : "/images/blankProfile.png"} alt={`A picture of ${firstName} ${lastName}`}/>
          </Col>
          <Col xs={6} sm={12}>
            <Card.Body className="py-auto px-1 px-sm-3">
              <Row>
                {kitNumberCol}
                <Col md={9} className="pe-sm-0">
                  <Card.Subtitle className="text-capitalize text-body-secondary">{firstName}</Card.Subtitle>
                  <Card.Title as="h3" className="text-capitalize">{lastName}</Card.Title>
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