import {Row, Spinner} from "react-bootstrap";

const LoadingScreen = () => (
    <Row className="justify-content-center mt-3">
      <Spinner animation="border" role="status" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Row>
);

export default LoadingScreen;