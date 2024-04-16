import {Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const FounderRow = ({founderName, founderRole, founderImage, founderDescription}) => (
    <Row className="mt-4 align-items-center">
      <Col sm={4} lg={2}>
        {/*<Image src={founderImage ? `${process.env.REACT_APP_HOSTED_URL}/images/upload/players/profile/away/${founderImage}`*/}
        {/*    : "/images/blankProfile.png"} alt={`A picture of ${founderName}`} fluid rounded/>*/}
        <Image src={founderImage ? `https://withingtonhopecf.co.uk/images/upload/players/profile/away/${founderImage}`
            : "/images/blankProfile.png"} alt={`A picture of ${founderName}`} fluid rounded/>
      </Col>
      <Col>
        <h2 className="mt-3">{founderName} {founderRole && `- ${founderRole}`}</h2>
        <p>{founderDescription}</p>
      </Col>
    </Row>
);

export default FounderRow;