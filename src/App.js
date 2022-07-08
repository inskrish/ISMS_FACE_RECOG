import { useState } from "react";
import { Button } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Clicktostart from "./Components/WebCamera/Clicktostart";
import Clicktostartphotodetail from "./Components/AddDetails/Clicktostartphotodetail"
import { UserContextProvider } from "./Components/Context/WebcamContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FormExample from "./Components/FormComponent/FormExample";
function App() {

  const [showAddUser, set_showAddUser] = useState(false);

  const [showgetadhaar, set_showgetadhaar] = useState(true);


  const styles = {
    Container: {
      paddingLeft: "2rem",
      paddingRight: "2rem",
      marginTop: "3rem",
    },
    row: {
      // marginLeft: "2rem",
      // marginRight: "2rem"
    },
    col: {
      // paddingLeft: "2rem",
      // paddingRight: "2rem"
    },
  };

  function reload_page(e) {
    window.location.reload(false);
  }

  function add_person(e) {
    
  }

  const setHandler = () => {
    set_showAddUser(true)
    set_showgetadhaar(false)
};

  return (
    // <>
        <UserContextProvider>

      <div className="container1">
        <img
          className="logo"
          src={require("./mylogo.png")}
          width="125px"
          height="125px"
        />
        <h4 align="center">Integrated Security Management System</h4>
      </div>
      <div className="container2">
        <Button type="simpleQuery" onClick={(e) => reload_page(e)} style={{"margin-left": "30px"}}>
          HOME
        </Button>
        {/* <Button type="simpleQuery" onClick={setHandler}>
          Add New User
        </Button> */}
        
        {/* <Button type="simpleQuery" onClick={(e) => add_person(e)}>
          Add Person
        </Button> */}
      </div>
      {/* <div style={styles.Container}>
    <Row style={styles.row}>
    <Col sm={4} style={styles.col}> */}
      
    {showgetadhaar && <Clicktostart /> }

      {showAddUser && <Clicktostartphotodetail />}
      {/* </Col> */}
      {/* <Col sm={8} style={styles.col}> */}
      {/* <FormExample/> */}
      {/* </Col> */}
      {/* </Row> */}
      {/* </div> */}
      </UserContextProvider>
     // </> 
    
  );
}

export default App;
