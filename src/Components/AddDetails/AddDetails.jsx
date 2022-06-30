import { Form, Col, Button, Row, InputGroup, Container } from "react-bootstrap";
import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import axios from "axios";
const baseURL = "http://11.0.0.221:8000/saveDetails/";
function AddDetails() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    const [data, setData] = useState({
        name: "",
        rank:"",
        number:"",
        aadhar:"",
        blacklist:"",
        category:"",
        gender:"",
        snumber:"",
    })

    function submit(e) {
        e.preventDefault();
        const form = new FormData();
        form.append('name', data.name);
        form.append('rank', data.rank);
        form.append('number', data.number);
        form.append('aadhar', data.aadhar);
        form.append('blacklist', data.blacklist);
        form.append('category', data.category);
        form.append('gender', data.gender);
        form.append('snumber', data.snumber);
        
        axios.post(baseURL, form);
    }
    function handle(e){
        const newData = { ...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }

  return (
    <Form noValidate validated={validated} onSubmit={(e) => submit(e)}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            id='name'
            onChange={(e) => handle(e)}
            value={data.name}
            required
            type="text"
            placeholder="Name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Rank</Form.Label>
          <Form.Control
            id='rank'
            onChange={(e) => handle(e)}
            value={data.rank}
            required    
            type="text"
            placeholder="Rank"
          />
          <Form.Control.Feedback>Nice!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Number</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              id='number'
              onChange={(e) => handle(e)}
              value={data.number}
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
        <Form.Group as={Col} md="6" >
          <Form.Label>Superviser Number</Form.Label>
          <Form.Control 
            id='snumber'
            onChange={(e) => handle(e)}
            value={data.snumber}
            type="text" 
            placeholder="Superviser Number" 
            required />
          <Form.Control.Feedback type="invalid">
            Please provide a SNumber.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>AadharCard number</Form.Label>
          <Form.Control 
            id='aadhar'
            onChange={(e) => handle(e)}
            value={data.aadhar}
            type="text" 
            placeholder="AadharCard number" 
            required />
          <Form.Control.Feedback type="invalid">
            Please provide a AadharCard number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Category</Form.Label>
          <Form.Control id='cat'
            onChange={(e) => handle(e)}
            value={data.cat}
            type="text" 
            placeholder="Cat" 
            required />
          <Form.Control.Feedback type="invalid">
            Please provide category.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-6">
        <Form.Group as={Col} md="3">
          <Form.Label>Gender</Form.Label>
          <Form.Select aria-label="Default select example"
            id='gender'
            onChange={(e) => handle(e)}
            value={data.gender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="3">
          <Form.Label>BlackList</Form.Label>
          <Form.Select aria-label="Default select example"
             id='blacklist'
             onChange={(e) => handle(e)}
             value={data.blacklist}
            >
            <option value="Male">No</option>
            <option value="Female">Yes</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Container gap={2} className="col-md-5 mx-auto my-3">
        <Button type='submit' variant="outline-primary col-md-3 mx-3">Add Details</Button>
      </Container>
      
    </Form>
  );
}

export default AddDetails;
