import {Carousel} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const CarouselComponent = ({carousel}) => {
  return (
      <Carousel className="rounded">
        {
          Object.entries(carousel)
          .sort(([indexA], [indexB]) => indexA - indexB)
          .map(([_, {url, description}]) =>
              <Carousel.Item key={url} className="rounded">
                <Image src={`/images/carousel/${url}`}
                       alt={description}
                       fluid
                       rounded/>
              </Carousel.Item>
          )
        }
      </Carousel>
  );
};

export default CarouselComponent;
//
// const CarouselItemComponent = ({url, description}) =>
//     <Carousel.Item className="rounded">
//       <Image src={`/images/carousel/${url}`}
//              alt={description}
//              fluid
//              rounded/>
//     </Carousel.Item>;