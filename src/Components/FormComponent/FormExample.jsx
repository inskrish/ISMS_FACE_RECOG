import {
  Form,
  Col,
  Button,
  Row,
  InputGroup,
  Container,
  Image,
} from "react-bootstrap";
import { useState } from "react";
import Stack from "react-bootstrap/Stack";
import axios from "axios";
import GetAadhar from "../GetAadhar/GetAadhar";
const baseURL = "http://11.0.0.221:8000/makeEntry/";

function FormExample(props) {
  const [validated, setValidated] = useState(false);
  const [showcurr, setshowcurr] = useState(true);
  const [change, setChange] = useState(false);


  const [data1, setData] = useState({
    token: "",
  });

  function handle(e) {
    const newData = { ...data1 };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }


  let value1 = "";

  async function submit(e) {
    value1 = e.target.value;
    e.preventDefault();
    console.log(value1);
    const form = new FormData();
    form.append("val", value1);
    form.append("name", props.data.name);
    form.append("rank", props.data.rank);
    form.append("number", props.data.phnumber);
    form.append("aadhar", props.data.aadhar);
    form.append("blacklist", props.data.blacklist);
    form.append("category", props.data.cat);
    form.append("gender", props.data.gender);
    form.append("snumber", props.data.snumber);
    form.append("token", data1.token);

    setshowcurr(false);
    setChange(true);

    console.log(data1.token)
    const response = await axios.post(baseURL, form);

    alert(response.data);
        window.location.reload(true);

    // decodeBase64()
    // e.target.reset();
    // if(response.data)
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("here");
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  console.log(props);
  console.log(props.data.image)
  // let encodedBase64 = props.data.image;
  // let buff = new Buffer(encodedBase64, 'base64');
  // let base64ToStringNew = buff.toString('ascii');
  

  return (
    <>
      {showcurr && (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Container style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }} >
          <Image
            src={`data:image/png;base64,${props.data.image}`}
            style={{ width: "250px", height: "250px" }}
          ></Image>
          </Container>
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
              <Form.Label>Phone Number</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  aria-describedby="inputGroupPrepend"
                  defaultValue={props.data.phnumber}
                  disabled={true}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide Phone Number.
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

            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Token</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Token"
                id="token"
                onChange={(e) => handle(e)}
                // defaultValue={props.data.token}
                disabled={false}
              />
            </Form.Group>
          </Row>

          <Container gap={2} className="col-md-5 mx-auto my-3">
            <Button
              variant="outline-success col-md-3 mx-3"
              onClick={(e) => submit(e)}
              id="In"
              value="In"
            >
              IN
            </Button>
            <Button
              variant="outline-danger col-md-3 mx-3"
              onClick={(e) => submit(e)}
              id="Out"
              value="Out"
            >
              OUT
            </Button>

          </Container>
        </Form>
      )}

      {change && <GetAadhar />}
    </>
  );
}

export default FormExample;
