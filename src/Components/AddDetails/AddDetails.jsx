import { Form, Col, Button, Row, InputGroup, Container } from "react-bootstrap";
import React, { useRef, useState, useEffect } from "react";
import Stack from "react-bootstrap/Stack";
import axios from "axios";
import FormExample from "../FormComponent/FormExample";
// import WebcamCapture from "../WebCamera/WebcamCapture"
import Clicktostart from "../WebCamera/Clicktostart"
import Webcam from "react-webcam";
import Resizer from "react-image-file-resizer";
import Clicktostartphotodetail from "./Clicktostartphotodetail"

const baseURL2 = "http://11.0.0.221:8000/saveDetails/";


function AddDetails(props) {
  // alert(props.data[0]);

  const [validated, setValidated] = useState(false);
  const [closeCurr, set_closeCurr] = useState(false);
  const [showNext, set_showNext] = useState(false);

  const [data, setData] = useState({
    name: "",
    rank: "",
    phnumber: "",
    aadhar: "",
    cat: "",
    gender: "Male",
    blacklist: "No",
    snumber: "",
    token: "",
    // superviser_name:""
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const form = new FormData();

  async function submit(e) {
    e.preventDefault();
    
    form.append("name", data.name);
    form.append("rank", data.rank);
    form.append("number", data.phnumber);
    form.append("aadhar", data.aadhar);
    form.append("blacklist", data.blacklist);
    form.append("category", data.cat);
    form.append("gender", data.gender);
    form.append("snumber", data.snumber);
    form.append("token", data.token);
    // form.append("superviser_name", data.superviser_name);
    form.append("photo0", props.data[0])
    form.append("photo1", props.data[1])
    form.append("photo2", props.data[2])
    form.append("photo3", props.data[3])
    form.append("photo4", props.data[4])
    // form.append("token", data.token);


    const response = await axios.post(baseURL2, form);

    if (response.data === "success") {
      set_closeCurr(false);
      set_showNext(false);
      alert("Data added successfully..!!");
      window.location.reload(false);
    }

  }
  
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <>
      {!closeCurr && (
        <Form noValidate validated={validated} onSubmit={(e) => submit(e)}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="name"
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
                id="rank"
                onChange={(e) => handle(e)}
                value={data.rank}
                required
                type="text"
                placeholder="Rank"
              />
              <Form.Control.Feedback>Nice!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Phone Number</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  id="phnumber"
                  onChange={(e) => handle(e)}
                  //   value={data.number}
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
            <Form.Group as={Col} md="6">
              <Form.Label>Superviser Name</Form.Label>
              <Form.Control
                id="snumber"
                onChange={(e) => handle(e)}
                // value={data.snumber}
                type="text"
                placeholder="Superviser Name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a SNumber.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>AadharCard number</Form.Label>
              <Form.Control
                id="aadhar"
                onChange={(e) => handle(e)}
                // value={data.aadhar}
                type="text"
                placeholder="AadharCard number"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a AadharCard number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                id="cat"
                onChange={(e) => handle(e)}
                // value={data.cat}
                type="text"
                placeholder="Cat"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide category.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-6">
            <Form.Group as={Col} md="3">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                aria-label="Default select example"
                as="select"
                id="gender"
                onChange={(e) => handle(e)}
                // value={data.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} md="3">
              <Form.Label>BlackList</Form.Label>
              <Form.Control
                aria-label="Default select example"
                as="select"
                id="blacklist"
                onChange={(e) => handle(e)}
                //  value={data.blacklist}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} md="3">
              <Form.Label>Token</Form.Label>
              <Form.Control
                id="token"
                onChange={(e) => handle(e)}
                // value={data.cat}
                type="number"
                placeholder="Token"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide Token.
              </Form.Control.Feedback>
            </Form.Group>
            


            {/* <Form.Group as={Col} md="3">
              <Form.Label>Superviser name</Form.Label>
              <Form.Control
                id="superviser_name"
                onChange={(e) => handle(e)}
                // value={data.cat}
                type="text"
                placeholder="Mr.Sandeep"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide Superviser name.
              </Form.Control.Feedback>
            </Form.Group> */}

            {/* <Clicktostartphotodetail/> */}
          </Row>
          {/* <Container gap={2} className="col-md-5 mx-auto my-3">
            <Button variant="outline-primary col-md-3 mx-3">
              Capture Images
            </Button>
          </Container> */}

          <Container gap={2} className="col-md-5 mx-auto my-3">
            <Button type="submit" variant="outline-primary col-md-3 mx-3">
              Add Details
            </Button>
          </Container>
        </Form>
      )}
      {/* {showNext && <FormExample data={data} />} */}
      {/* {set_closeCurr(true)} */}
    </>
  );
}

export default AddDetails;
