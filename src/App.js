import { useState } from "react";
import { Button } from "react-bootstrap";

import { isMobile } from "react-device-detect";
import "./App.css";
import {Footer} from "./Components/Footer";
import ToggleSwitch from "./Components/ToggleSwitch";
import SideNavBar from "./Components/navbar/Navbar";
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

  const[state, setState]=useState(true);
  console.log(state)

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
        
          <div className="App">

          <SideNavBar/>    
        <div className="tittle mb-0">
        <img 
          className="logo"
          src={require("./mylogo.png")}
          width="110px"
          height="110px"
          alt="INS Valsura"
        />
        <span>AI Based Facial Recognition System</span>
        </div>
        
    <div className="bodyContainer">
    <ToggleSwitch label="Input Method" stateChanger={setState}  />
      {showgetadhaar && <Clicktostart state={state} /> }
      {showAddUser && <Clicktostartphotodetail />}
    </div>
      <div className="FooterClass"><Footer /></div>
      </div>
      </UserContextProvider>
  );
}

export default App;
