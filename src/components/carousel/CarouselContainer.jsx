import {Carousel, Spinner} from "react-bootstrap";
import {selectById, useGetConfigQuery} from "../../features/config/configSlice";
import {useSelector} from "react-redux";
import Image from "react-bootstrap/Image";

const CarouselContainer = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetConfigQuery();

  const carousel = useSelector(state => selectById(state, "carousel"));

  if (isLoading) {
    return <Spinner animation="border" role="status" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
  }

  if (isError) {
    return (<p>Unknown error when fetching carousel: {error}</p>);
  }

  if (isSuccess) {
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
  }
};

export default CarouselContainer;