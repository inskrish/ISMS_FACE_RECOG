import {
  Form,
  Col,
  Button,
  Row,
  InputGroup,
  Container,
  Image,
} from "react-bootstrap";
import "./style.css"
import { useState ,useEffect } from "react";
import Stack from "react-bootstrap/Stack";
import axios from "axios";
import GetAadhar from "../GetAadhar/GetAadhar";
import ImageComponent from "./ImageComponent";
const baseURL = "http://11.0.0.221:8000/makeEntry/";

function FormExample(props) {
  const [validated, setValidated] = useState(false);
  const [showcurr, setshowcurr] = useState(true);
  const [change, setChange] = useState(false);


  const [data1, setData] = useState({
    token: "",
    supervisor:" "
  });

  function handle(e) {
    const newData = { ...data1 };
    console.log(e.target.value,e.target.id)
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
const [sup,setSup]=useState([]);
useEffect(() => {
 

  axios.get('http://11.0.0.221:8000/getSups/').then((res) => {
   setSup(res.data);
   console.log('supervisor list called');
  })
 
}, [])
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
    form.append("supervisor", data1.supervisor);
    form.append("token", data1.token);

    setshowcurr(false);
    setChange(true);

    console.log(data1.token)
    const response = await axios.post(baseURL, form);
    console.log(response.data)
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
        
        
        
        <>
       
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <diV style={{padding:"20px",minWidth:"200px"}}>


            <Row className="mb-4">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label className="form">Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Name"
                  defaultValue={props.data.name}
                  disabled={true} />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label className="form">Rank</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Rank"
                  defaultValue={props.data.rank}
                  disabled={true} />
                <Form.Control.Feedback>Nice!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label className="form">Phone Number</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    aria-describedby="inputGroupPrepend"
                    defaultValue={props.data.phnumber}
                    disabled={true}
                    required />
                  <Form.Control.Feedback type="invalid">
                    Please provide Phone Number.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label className="form">Service Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="SNumber"
                  defaultValue={props.data.snumber}
                  disabled={true}
                  required />
                <Form.Control.Feedback type="invalid">
                  Please provide a SNumber.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label className="form">Aadharnumber</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="AadharCard number"
                  defaultValue={props.data.aadhar}
                  disabled={true}
                  required />
                <Form.Control.Feedback type="invalid" >
                  Please provide a AadharCard number.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label className="form">Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Cat"
                  defaultValue={props.data.cat}
                  disabled={true}
                  required />
              </Form.Group>
            </Row>

            <Row className="mb-6">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label className="form">Gender</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Gender"
                  defaultValue={props.data.gender}
                  disabled={true} />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label className="form">BlackList</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Blacklist"
                  defaultValue={props.data.blacklist}
                  disabled={true} />
              </Form.Group>
              <Form.Group as={Col} md="4">
              <Form.Label className="form">Superviser</Form.Label>
              <Form.Control
                aria-label="Default select example"
                id="supervisor"
                as="select"
                onChange={(e) => handle(e)}
                
              >
              {sup.map((option,index)=>(
                <option  key={index} value={option.value}>{sup[index]}</option>
               

              ))}
                
              </Form.Control>
              
            </Form.Group>
            </Row>
            <Row className="mb-6">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label className="form">Token</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Token"
                  id="token"
                  onChange={(e) => handle(e)}
                  // defaultValue={props.data.token}
                  disabled={false} />
              </Form.Group>
            </Row>
          </diV>
          
         
          <Container gap={2} className="col-md-8 mx-auto my-4">
            <Button
              variant="success col-md-3 mx-3"
              onClick={(e) => submit(e)}
              id="In"
              value="In"
            >
              IN
            </Button>
            <Button
              variant="danger col-md-3 mx-3"
              onClick={(e) => submit(e)}
              id="Out"
              value="Out"
            >
              OUT
            </Button>
            <Button
              variant="warning col-md-3 mx-3"
              onClick={(e) => submit(e)}
              id="abort"
              value="Out"
            >
              Abort
            </Button>

          </Container>
        </Form>
      
          </>
          
      )}
      
      {change && <GetAadhar />}
    </>
  );
}

export default FormExample;
