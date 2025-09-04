import {Carousel} from "react-bootstrap";
import {selectById} from "../../features/config/configSlice";
import {useSelector} from "react-redux";
import Image from "react-bootstrap/Image";

const CarouselContainer = () => {
  const carousel = useSelector(state => selectById(state, "carousel"));

  const imageData = Object.entries(carousel[1]).sort(([indexA], [indexB]) => indexA - indexB);

  return <Carousel className="rounded">
    {
      imageData.map(([_, {url, description}]) =>
          <Carousel.Item key={url} className="rounded">
            <Image src={`/images/carousel/${url}`}
                   alt={description}
                   fluid
                   rounded/>
          </Carousel.Item>
      )
    }
  </Carousel>;
};

export default CarouselContainer;