import { Form, Col, Button, Row, InputGroup, Container } from "react-bootstrap";
import React, { useRef, useState, useEffect, useContext } from "react";
import Stack from "react-bootstrap/Stack";
import axios from "axios";
import FormExample from "../FormComponent/FormExample";
// import WebcamCapture from "../WebCamera/WebcamCapture"
import Clicktostart from "../WebCamera/Clicktostart";
import Webcam from "react-webcam";
import Resizer from "react-image-file-resizer";
import Clicktostartphotodetail from "./Clicktostartphotodetail";
import { Spinner } from "react-bootstrap";
import { UserContext } from "../Context/WebcamContext";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Alert } from "react-bootstrap";
import "./style.css"

const baseURL2 = "http://11.0.0.221:8000/saveDetails/";
 function AddDetails(props) {
  const [cat,setCat]=useState([]);
  const [sup,setSup]=useState([]);
  useEffect(() => {
     axios.get('http://11.0.0.221:8000/getCat/').then((res)=>{
      setCat(res.data);
      console.log("hit");
     })

     axios.get('http://11.0.0.221:8000/getSups/').then((res) => {
      setSup(res.data);
      console.log('supervisor list called');
     })
    
}, [])
  
    

  // alert(props.data[0]);
  const {
    display_webcam,
    set_display_webcam,
    sm_value,
    set_sm_value,
    show_spinner,
    set_show_spinner,
    show_add_details_btn,
    set_show_add_details_btn,
  } = useContext(UserContext);
  const [disable_btn, set_btn] = useState(true);
  const [disbleCapture, setDisbleCapture] = useState(true);
  const [validated, setValidated] = useState(false);
  const [closeCurr, set_closeCurr] = useState(false);
  const [showNext, set_showNext] = useState(false);

  const [showAdddetailsSuccess, set_showAdddetailsSuccess] = useState(false);
  const [showAdddetailsFail, set_showAdddetailsFail] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAadharError, setIsAadharError] = useState(false);
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
    supervisor:""
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
    set_showAdddetailsFail(false);
    set_show_spinner(true);
    set_btn(false);

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
    form.append("supervisor", data.supervisor);
    // form.append("superviser_name", data.superviser_name);

    form.append("photo0", props.data[0]);
    form.append("photo1", props.data[1]);
    form.append("photo2", props.data[2]);
    form.append("photo3", props.data[3]);
    form.append("photo4", props.data[4]);
    // form.append("token", data.token);

    const response = await axios.post(baseURL2, form);

    if (response.data === "success") {
      set_closeCurr(false);
      set_showNext(false);
      set_btn(true);
      set_show_spinner(false);
      set_showAdddetailsSuccess(true);
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
    }
    else if (response.data === "User Details already exist in the database.") {
      set_btn(true);
      set_show_spinner(false);
      set_showAdddetailsFail(true);
    }
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  function phoneHandle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    
    if(e.target.value.length > 10) {
      setIsError(true)
    }
    else{
      setIsError(false)
      
    }
    
    console.log(newData)
    console.log(e.target.value)
  }

  function aadharHandle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    if(e.target.value.length > 12) {
      setIsAadharError(true)
    }
    else{
      setIsAadharError(false)
    }
  }

  function set_add_details() {}

  return (
    <>
      {!closeCurr && (
        <Form noValidate validated={validated} onSubmit={(e) => submit(e)}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label className="form">Name</Form.Label>
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
              <Form.Label className="form">Rank</Form.Label>
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
              <Form.Label className="form">SNumber</Form.Label>
              <Form.Control
                id="snumber"
                onChange={(e) => handle(e)}
                value={data.snumber}
                required
                type="text"
                placeholder="snumber"
              />
              <Form.Control.Feedback>Nice!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label className="form">Phone Number</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">Ph.</InputGroup.Text>
                <Form.Control
                  id="phnumber"
                  pattern="[0-9]{10}"
                  
                  onChange={(e) => phoneHandle(e)}
                  //   value={data.number}
                  type="number"
                  placeholder="Number"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                
              
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} md="4">
              <Form.Label className="form">Superviser</Form.Label>
              <Form.Control
                aria-label="Default select "
                id="supervisor"
                as="select"
                onChange={(e) => handle(e)}
                
              >
              {sup.map((option,index)=>(
                <option  key={index} value={option.value}>{sup[index]}</option>
               

              ))}
                
              </Form.Control>
              
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label className="form">AadharCard number</Form.Label>
              <Form.Control
                id="aadhar"
                onChange={(e) => aadharHandle(e)}
                // value={data.aadhar}
                type="number"
                placeholder="AadharCard number"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a AadharCard number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label className="form">Category</Form.Label>
              <Form.Control
                aria-label="Default select example"
                id="cat"
                as="select"
                onChange={(e) => handle(e)}
                // value={data.cat}
              >
              {cat.map((option,index)=>(
                <option  key={index} value={option.value}>{cat[index]}</option>
               

              ))}
                
              </Form.Control>
            </Form.Group>
          </Row>
          <Row className="mb-6">
            <Form.Group as={Col} md="3">
              <Form.Label className="form">Gender</Form.Label>
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
              <Form.Label className="form">BlackList</Form.Label>
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

            {/* <Form.Group as={Col} md="3">
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
             */}

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
          {/* <Container gap={2} className="col-md-5 mx-auto my-3">
            <Button
              type="submit"
              variant="outline-primary col-md-3 mx-3"
              disabled={!show_add_details_btn}
            >
              Add Details
            </Button>
          </Container> */}
          {disable_btn && (
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <Button
                variant="outline-primary"
                color="primary"
                type="submit"
                disabled={!show_add_details_btn}
              >
                Add Details
              </Button>
            </Container>
          )}

          {show_spinner && (
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                &nbsp;&nbsp; Loading...
              </Button>
            </Container>
          )}
          {showAdddetailsSuccess && (
            <Alert variant="success">Person Added Successfully !</Alert>
          )}
          {showAdddetailsFail && (
            <Alert variant="danger">User Details already exist..!</Alert>
          )}
          {isError && (
            <Alert variant="danger">Enter valid Phone number</Alert>
          )}
          {isAadharError && (
            <Alert variant="danger">Enter valid AadharCard number</Alert>
          )}
        </Form>
      )}
      {/* {showNext && <FormExample data={data} />} */}
      {/* {set_closeCurr(true)} */}
    </>
  );
}

export default AddDetails;
