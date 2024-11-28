import {Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const TeamLabel = ({team, isAway}) => {
  const withyLogo = <Image src="/images/logo.png" alt="Withington Hope Crest" fluid/>;
  const otherLogo = <Image src="/images/blankCrest.png" alt="Blank Logo" fluid/>;
  const className = `align-items-center flex-column-reverse text-center ${isAway ? 'flex-lg-row-reverse text-lg-start' : 'flex-lg-row text-lg-end'}`

  return (
      <Row className={className}>
        <Col>
          <p className="mb-0">{team}</p>
        </Col>
        <Col className="imageCol" xxl={3} lg={3} md={4} sm={6} xs={7}>
          {team === "Withington Hope" ? withyLogo : otherLogo}
        </Col>
      </Row>
  );
};

export default TeamLabel;