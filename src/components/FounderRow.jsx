import {Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const FounderRow = ({founderName, founderDescription}) => (
    <Row className="mt-4 align-items-center">
      <Col sm={4} lg={2}>
        <Image src="/images/blankProfile.png" alt={founderName} fluid rounded/>
      </Col>
      <Col>
        <h2 className="mt-3">{founderName}</h2>
        <p>{founderDescription}</p>
      </Col>
    </Row>
);

export default FounderRow;