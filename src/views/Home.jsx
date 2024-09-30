import {Button, Col, Row} from "react-bootstrap";
import "./Home.css";
import TwitterContainer from "../components/TwitterContainer";
import CarouselContainer from "../components/carousel/CarouselContainer";

const Home = () => (
    <Row>
      <Col className="mb-4">
        <Row id="carouselContainer" className="mb-4 justify-content-center">
          <CarouselContainer />
        </Row>
        <Row className="fs-5">
          <p> Welcome to the Withington Hope CF official website.</p>
          <p>
            Founded in 2020 by Giorgio Arnetoli, Alex Gunn, Sam Hargraves and Harry Clarke, Withington Hope
            Club de Fútbol are a men's football team based in Manchester.
          </p>
          <p>
            We play in the Manchester Saturday Morning Football League, and our home ground is Hough End
            Playing Fields
          </p>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Button href="/about" className="fs-5">Read our full story</Button>
          </Col>
        </Row>
      </Col>
      <Col lg={4} className="ms-lg-3">
        <TwitterContainer />
      </Col>
    </Row>
);

export default Home;