import {Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";

export const NotFound = () => (
    <>
      <Row className="justify-content-center">
        <Col sm={4}>
          <h1 className="display-3 text-center">Page not found</h1>
          <Image src="/images/sleepyZico.jpg" alt="Zico, asleep in a chair" fluid roundedCircle thumbnail/>
        </Col>
      </Row>
    </>
);

export default NotFound;