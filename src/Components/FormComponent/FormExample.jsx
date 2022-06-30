import { Form, Col, Button, Row, InputGroup, Container } from "react-bootstrap";
import { useState } from "react";
import Stack from "react-bootstrap/Stack";
import axios from "axios";

const baseURL = "http://11.0.0.221:8000/makeEntry/";

function FormExample(props) {
  const [validated, setValidated] = useState(false);

  const [btn_state, set_btn_state] = useState("")

  async function submit(e) {
      set_btn_state(e.target.value, () => {
        e.preventDefault();
        console.log(btn_state)
        const form = new FormData();
        form.append("val", btn_state);
        const response =  axios.post(baseURL, form);
      });
  };


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  console.log(props);
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            defaultValue={props.data.name}
            disabled={true}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Rank</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Rank"
            defaultValue={props.data.rank}
            disabled={true}
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
              defaultValue={props.data.phnumber}
              disabled={true}
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
          <Form.Label>Service Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="SNumber"
            defaultValue={props.data.snumber}
            disabled={true}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a SNumber.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>AadharCard number</Form.Label>
          <Form.Control
            type="text"
            placeholder="AadharCard number"
            defaultValue={props.data.aadhar}
            disabled={true}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a AadharCard number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cat"
            defaultValue={props.data.cat}
            disabled={true}
            required
          />
        </Form.Group>
      </Row>

      <Row className="mb-6">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Gender"
            defaultValue={props.data.gender}
            disabled={true}
          />
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>BlackList</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Blacklist"
            defaultValue={props.data.blacklist}
            disabled={true}
          />
        </Form.Group>
      </Row>

      <Container gap={2} className="col-md-5 mx-auto my-3">
        <Button variant="outline-success col-md-3 mx-3" onClick={(e) => submit(e)} id='In' value='In'>IN</Button>
        <Button variant="outline-danger col-md-3 mx-3" onClick={(e) => submit(e)} id='Out' value='Out'>OUT</Button>
      </Container>
      {/* <Button type="submit">Submit</Button> */}
      {/* <div className="d-grid gap-3 ">

       
       
        
</div> */}
    </Form>
  );
}

export default FormExample;
