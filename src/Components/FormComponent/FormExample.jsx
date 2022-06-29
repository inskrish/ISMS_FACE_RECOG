import { Form, Col, Button, Row, InputGroup, Container } from "react-bootstrap";
import { useState } from "react";
import Stack from "react-bootstrap/Stack";

function FormExample() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            defaultValue="bobo"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Rank</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Rank"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Nice!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Number</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Number"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>SNumber</Form.Label>
          <Form.Control type="text" placeholder="SNumber" required />
          <Form.Control.Feedback type="invalid">
            Please provide a SNumber.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>AadharCard number</Form.Label>
          <Form.Control type="text" placeholder="AadharCard number" required />
          <Form.Control.Feedback type="invalid">
            Please provide a AadharCard number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Cat" required />
          <Form.Control.Feedback type="invalid">
            Please provide category.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-6">
        <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label>Gender</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label>BlackList</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="Male">No</option>
            <option value="Female">Yes</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Container gap={2} className="col-md-5 mx-auto my-3">
        <Button variant="outline-success col-md-3 mx-3">IN</Button>
        <Button variant="outline-danger col-md-3 mx-3">OUT</Button>
      </Container>
      {/* <Button type="submit">Submit</Button> */}
      {/* <div className="d-grid gap-3 ">

       
       
        
</div> */}
    </Form>
  );
}

export default FormExample;
