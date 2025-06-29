import {Col, Row, Stack} from "react-bootstrap";
import "./Home.css";
import TwitterContainer from "../components/TwitterContainer";
import CarouselContainer from "../components/carousel/CarouselContainer";
import FixtureSnippetContainer from "../components/fixtures/snippet/FixtureSnippetContainer";

const Home = () => (
    <Row className="justify-content-evenly">
      <Col lg={8} xl={9} className="mb-4">
        <Row id="carouselContainer" className="mb-4 justify-content-center">
          <CarouselContainer />
        </Row>
        <Row className="fs-5">
          <p> Welcome to the Withington Hope CF official website.</p>
          <p>
            Founded in 2020 by Giorgio Arnetoli, Alex Gunn, Sam Hargraves, and Harry Clarke, Withington Hope Club de Fútbol is
            a men's football team based in Manchester
          </p>
          <p>
            The club plays in the Manchester Saturday Morning Football League and its home ground is the mighty Hough End
            Playing Fields. <a href="/about">Read our full story&nbsp;&rarr;</a>
          </p>
        </Row>
        <Row className="mt-4">
          <Col>
            <FixtureSnippetContainer />
          </Col>
        </Row>
      </Col>
      <Col lg={3}>
        <hr className="w-50 mx-auto mb-5 d-block d-lg-none" />
        <Stack direction="vertical">
          <TwitterContainer />
        </Stack>
      </Col>
    </Row>
);

export default Home;