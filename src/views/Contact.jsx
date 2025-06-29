import {Button, Col, Form, ListGroup, Row} from "react-bootstrap";
import {useState} from "react";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setValidated(true);

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(false);
      window.location.href = `mailto:withingtonhope.cdf@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
      <>
        <h1>Get in Touch</h1>
        <div className="d-flex flex-column flex-grow-1 justify-content-around">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col lg={4} className="mb-2">
                <Form.Select className="fs-4" defaultValue="" required onChange={e => setSubject(e.target.value)}>
                  <option value="" disabled>Enquiry Type</option>
                  <option value="Joining Withington Hope CF">Joining the club</option>
                  <option value="General enquiy about Withington Hope CF">General Enquiry</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Control className="fs-4" as="textarea" required rows={10} placeholder="Enter your message here..." onChange={e => setBody(e.target.value)}/>
              </Col>
            </Row>
            <Row className="justify-content-center mt-4">
              <Col lg={6}>
                <div className="d-grid">
                  <Button className="fs-4" type="submit" variant="primary">
                    Send Message <i className="fa-regular fa-envelope" />
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
          <Row className="mt-5 pt-5 fs-4">
            <Col>
              <h3>Other ways to get in touch</h3>
              <ListGroup className="ms-lg-4 text-md-center" horizontal="md">
                <ListGroup.Item className="text-nowrap" href="mailto:withingtonhope.cdf@gmail.com" action={true}>
                  <i className="bi fa-regular fa-envelope" /> withingtonhope.cdf@gmail.com
                </ListGroup.Item>
                <ListGroup.Item href="https://twitter.com/withingtonhope" target="_blank" rel="noopener noreferrer" action={true}>
                  <i className="fa-brands fa-twitter" aria-label="twitter"/> @WithingtonHope
                </ListGroup.Item>
                <ListGroup.Item href="https://www.instagram.com/withingtonhope" target="_blank" rel="noopener noreferrer" action={true}>
                  <i className="fa-brands fa-instagram" aria-label="instagram" /> withingtonhope
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </div>
      </>
  );
};

export default Contact;