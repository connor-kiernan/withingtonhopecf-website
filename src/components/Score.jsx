import {Col, Row} from "react-bootstrap";

const Score = ({homeGoals, awayGoals}) => (
    <Row>
      <Col>
        <h1>{homeGoals}</h1>
      </Col>
      <Col>
        <h1>{awayGoals}</h1>
      </Col>
    </Row>
);
export default Score;