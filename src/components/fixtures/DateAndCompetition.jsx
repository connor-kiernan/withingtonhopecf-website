import {Col, Row} from "react-bootstrap";
import Competition from "./Competition";

const DateAndCompetition = ({date, withTime=true, competition}) => {
  const formattedDate = new Date(date);

  const dateString = formattedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short'})
  .replace(/\d{1,2}/, match => addOrdinalSuffix(parseInt(match)));


  return (
    <Row className="text-center text-sm-start justify-content-center gx-2 fs-5">
      <Col xs="auto" sm={12} className="fw-semibold"><p className="mb-0">{dateString}</p></Col>
      {withTime && <Col xs="auto" sm={12} ><p className="mb-0">{formattedDate.toLocaleTimeString('en-GB', {timeStyle: 'short', hour12: true})}</p></Col>}
      <Col xs={"auto"} sm><span className="d-inline d-sm-none">&#9679;</span> <Competition competition={competition} /></Col>
    </Row>
  )
}

export default DateAndCompetition;

function addOrdinalSuffix(day) {
  if (day > 3 && day < 21) return day + 'th';
  switch (day % 10) {
    case 1:  return day + 'st';
    case 2:  return day + 'nd';
    case 3:  return day + 'rd';
    default: return day + 'th';
  }
}