import {Col, Row} from "react-bootstrap";

const FormattedDate = ({date, withTime=true}) => {
  const formattedDate = new Date(date);

  const dateString = formattedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short'})
  .replace(/\d{1,2}/, match => addOrdinalSuffix(parseInt(match)));


  return (
    <Row className="text-center text-sm-start justify-content-center gx-2">
      <Col xs="auto" sm={12} className="fw-semibold fs-5"><p className="mb-0">{dateString}</p></Col>
      {withTime && <Col xs="auto" sm={12} className="fs-5"><p className="mb-0">{formattedDate.toLocaleTimeString('en-GB', {timeStyle: 'short', hour12: true})}</p></Col>}
    </Row>
  )
}

export default FormattedDate;

function addOrdinalSuffix(day) {
  if (day > 3 && day < 21) return day + 'th';
  switch (day % 10) {
    case 1:  return day + 'st';
    case 2:  return day + 'nd';
    case 3:  return day + 'rd';
    default: return day + 'th';
  }
}