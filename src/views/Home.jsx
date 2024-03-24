import {Carousel, Row, Image, Col} from "react-bootstrap";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import "./Home.css";

const Home = () => (
    <>
      <Row>
        <Col sm={8}>
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
          <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam nec dui. Quisque nec mauris
            sit
            amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam.
            Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus
            varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at
            ultricies
            metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam. commodo lectus, ac
            blandit
            elit tincidunt id. Sed rhoncus, tortor sed velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
            eleifend
            tristique, tortor mauris molestie elit, et lacinia ipsum quam
          </p>
        </Col>
        <Col sm={4}>
          <h3>Latest updates from the Twitter:</h3>
          <div className="twitterContainer mb-2">
            <TwitterTimelineEmbed
                autoHeight
                placeholder={<TwitterPlaceholder/>}
                sourceType="url"
                url="https://twitter.com/withingtonhope"/>
          </div>
        </Col>
      </Row>
    </>
);

const TwitterPlaceholder = () => (
    <p className="placeholder-wave">
      <span className="placeholder placeholder-lg w-100"></span>
      <span className="placeholder placeholder-lg w-75"></span>
      <span className="placeholder placeholder-lg w-100"></span>
      <span className="placeholder placeholder-lg w-50"></span>
    </p>
);

export default Home;