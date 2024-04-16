import {Button, Carousel, Col, Image, Placeholder, Row} from "react-bootstrap";
import {TwitterTweetEmbed} from "react-twitter-embed";
import "./Home.css";

const Home = () => (
    <Row>
      <Col className="mb-4">
        <Row id="carouselContainer" className="mb-4 justify-content-center">
          <Carousel className="rounded">
            <Carousel.Item className="rounded">
              <Image src="/images/carousel/zicoJordTom.jpg"
                     alt="Zico, Jord, and Tom playing against AFC Stockport"
                     fluid
                     rounded/>
            </Carousel.Item>
            <Carousel.Item className="rounded">
              <Image src="/images/carousel/dcDanny.jpg"
                     alt="DC, Jord, and Danny playing against AFC Stockport"
                     fluid
                     rounded/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src="/images/carousel/samMccall.jpg"
                     alt="Sam playing against AFC Stockport" fluid rounded/>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row className="fs-4">
          <p> Welcome to the Withington Hope Hope CF official website.</p>
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
            <Button href="/about" className="fs-4">Read our full story</Button>
          </Col>
        </Row>
      </Col>
      <Col lg={4} className="ms-lg-3">
        <h3>Check out the Twitter:</h3>
        <div className="twitterContainer mb-2">
          <TwitterTweetEmbed
              placeholder={<TwitterPlaceholder/>}
              tweetId="1779118194629743008"/>
        </div>
      </Col>
    </Row>
);

const TwitterPlaceholder = () => (
    <Placeholder as="p" animation="wave">
      <Placeholder className="w-100" size="lg"/>
      <Placeholder className="w-75" size="lg"/>
      <Placeholder className="w-100" size="lg"/>
      <Placeholder className="w-50" size="lg"/>
      <Placeholder className="w-100" size="lg"/>
      <Placeholder className="w-75" size="lg"/>
      <Placeholder className="w-100" size="lg"/>
      <Placeholder className="w-50" size="lg"/>
    </Placeholder>
);

export default Home;