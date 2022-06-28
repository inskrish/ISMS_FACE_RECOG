import { useState } from "react";
import Button from "@material-ui/core/Button";
import { isMobile } from "react-device-detect";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Clicktostart from "./Components/WebCamera/Clicktostart";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FormExample from "./Components/FormComponent/FormExample";
function App() {

  const styles = {
    Container: {
        paddingLeft: "2rem" ,
        paddingRight: "2rem",
        marginTop:"3rem"
        
    },
    row: {
        // marginLeft: "2rem",
        // marginRight: "2rem"
    },
    col: {
        // paddingLeft: "2rem",
        // paddingRight: "2rem"
    }
};

  return (
   <>
   
<div className="container1">
<img className="logo" src={require('./mylogo.png')} width="125px" height="125px" />
<h4 align='center' >Integrated Security Management System</h4>
</div>
   <div style={styles.Container}>
    <Row style={styles.row}>
    <Col sm={4} style={styles.col}>
    <Clicktostart/>
    </Col>
    <Col sm={8} style={styles.col}>
    <FormExample/>
    </Col>
    </Row>
   </div>
   </>
  );
}

export default App;
