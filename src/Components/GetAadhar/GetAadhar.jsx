import { useRef, useState, useEffect , useContext } from "react";
import { Form, Col, Button, Row, InputGroup, Container } from "react-bootstrap";
import axios from "axios";
import FormExample from "../FormComponent/FormExample";
import AddDetails from "../AddDetails/AddDetails";
import Clicktostartphotodetail from "../AddDetails/Clicktostartphotodetail"
// import NewEntry from "../AddDetails/NewEntry";
import { UserContext } from "../Context/WebcamContext";



const baseURL = "http://11.0.0.221:8000/uploadAadhaar/";

function GetAadhar() {

  const { display_webcam, set_display_webcam ,sm_value ,set_sm_value} = useContext(UserContext);


    const [show_form, set_show_form]=useState(true);
  const [data, setData] = useState({
    aadhaar: "",
  });
  const [settling_props, set_settling_props] = useState({
    name: "",
    rank: "",
    phnumber: "",
    aadhar: "",
    cat: "",
    gender: "",
    blacklist: "",
    snumber: "",
    image: "",
  });
  const [display_form, set_display_form] = useState(false);
  const [display_Add_new, set_display_Add_new] = useState(false);
  // const [new_entry, set_new_entry] = useState(false);
  async function submit(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("aadhaar", data.aadhaar);
    const response = await axios.post(baseURL, form);



    if (response.data === "unknown") {
        set_show_form(false)
        set_display_form(false)
        set_display_Add_new(true)
        set_sm_value(12)

        set_display_webcam(false)
        // set_new_entry(true);

    } else {
      set_display_form(true);
      set_show_form(false)
      set_settling_props({
        ...settling_props,
        name: response.data.Name,
        rank: response.data.Rank,
        phnumber: response.data.Number,
        aadhar: response.data.Adhar,
        cat: response.data.Cat,
        gender: response.data.gender,
        blacklist: response.data.B,
        snumber: response.data.snumber,
        token: response.data.token,
        image: response.data.image,
      });
    }
  }
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <>
    {show_form &&
      
        <Form onSubmit={(e) => submit(e)}>

        <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Aadhar Card Number</Form.Label>
          <Form.Control
            id='aadhaar'
            onChange={(e) => handle(e)}
            value={data.aadhaar}
            required
            type="number"
            placeholder=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>


        <Container gap={2} className="col-md-5 mx-auto my-3">
        <Button type='submit' variant="outline-primary col-md-3 mx-3">Get Details</Button>
      </Container>

        </Form>
        }

     
      {display_form && <FormExample data={settling_props} />}
      {/* {display_Add_new && <AddDetails/>} */}
      {display_Add_new && <Clicktostartphotodetail/>}
      {/* {new_entry && <NewEntry />} */}
      {/* { <AddDetails/>} */}

    </>
  );
}
export default GetAadhar;
