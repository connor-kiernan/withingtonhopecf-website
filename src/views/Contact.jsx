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
      window.location.href = `mailto:fake@email.com?subject=${subject}&body=${body}`;
    }
  };

  return (
      <>
        <h1>Get in Touch</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col sm={4} className="mb-2">
              <Form.Select defaultValue="" required onChange={e => setSubject(e.target.value)}>
                <option value="" disabled>Enquiry Type</option>
                <option value="Joining Withington Hope CF">Joining the club</option>
                <option value="General enquiy about Withington Hope CF">General Enquiry</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Control as="textarea" required rows={10} placeholder="Enter your message here..." onChange={e => setBody(e.target.value)}/>
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col sm={6}>
              <div className="d-grid">
                <Button type="submit" variant="primary">
                  Send Message <i className="fa-regular fa-envelope" />
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
        <Row className="mt-5 pt-5">
          <Col>
            <h3>Other ways to get in touch</h3>
            <ListGroup className="ms-md-4" horizontal="md">
              <ListGroup.Item href="mailto:fake@email.com" action={true}>
                  <i className="bi fa-regular fa-envelope" /> fake@email.com
                </ListGroup.Item>
              <ListGroup.Item href="https://twitter.com/withingtonhope" action={true}>
                  <i className="fa-brands fa-twitter" aria-label="twitter"/> @WithingtonHope
              </ListGroup.Item>
              <ListGroup.Item href="https://www.instagram.com/withingtonhope" action={true}>
                <i className="fa-brands fa-instagram" aria-label="instagram" /> withingtonhope
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </>
  );
};

export default Contact;