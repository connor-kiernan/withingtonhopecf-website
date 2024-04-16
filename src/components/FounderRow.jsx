import {Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const FounderRow = ({founderName, founderRole, founderImage, founderDescription}) => (
    <Col className="text-center">
      <Image className="w-50" src={founderImage ? `${process.env.REACT_APP_HOSTED_URL}/images/upload/players/profile/away/${founderImage}`
          : "/images/blankProfile.png"} alt={`A picture of ${founderName}`} fluid rounded/>
      <h2 className="mt-3">{founderName}</h2>
      <h3 className="text-secondary">{founderRole}</h3>
      <p>{founderDescription}</p>
    </Col>
);

export default FounderRow;