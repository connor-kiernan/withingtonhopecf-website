import {Card, Col} from "react-bootstrap";

const VipCard = ({name, role, image}) => {
  const imgSrc = image ? `${process.env.REACT_APP_HOSTED_URL}/images/upload/players/profile/away/${image}`
      : "/images/blankProfile.png";

  return (
      <Col className="text-center mb-3">
        <Card className="border-0">
          <Card.Img variant="top" src={imgSrc} alt={`A picture of ${name}`}/>
          <Card.Body>
            <Card.Title as="h2">{name}</Card.Title>
            <Card.Subtitle className="text-body-secondary">{role}</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
  );
};

export default VipCard;