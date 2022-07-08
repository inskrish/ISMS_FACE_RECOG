import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { UserContext } from "../Context/WebcamContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState, useEffect, useContext } from "react";
import { Container,Row,Col } from "react-bootstrap";

function SuccessAlert() {
  // const { setShowOpenBtn } = props;
  const {
    display_webcam,
    set_display_webcam,
    sm_value,
    set_sm_value,
    show_spinner,
    set_show_spinner,
    show_Success_alert,
    set_show_Success_alert,
    show_Warning_alert,
    set_show_Warning_alert,
  } = useContext(UserContext);

  setTimeout(() => {
    set_show_Success_alert(false);
    set_show_Warning_alert(false);
  }, 3000);

  if (show_Success_alert) {
    return (
      // <Alert variant="success" onClose={() => set_show_Success_alert(false)} dismissible>
      <Container
        style={{
          marginBottom:"2rem",
          width: "30rem",
          height: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

       <Row className="justify-content-md-center">
    
        <Col >
        {/* <Alert variant="success" dismissible>
          <Alert.Heading>Person detected Successfully</Alert.Heading>
        </Alert> */}

        <Alert key="success" variant="success">
          Person detected Successfully
        </Alert>

        </Col>
    
  </Row>
      </Container>
    );
  } else {
    return (
      <Container
        style={{
          marginBottom:"2rem",
          width: "30rem",
          height: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       <Row className="justify-content-md-center">
    
    <Col >
        <Alert key="danger" variant="danger">
          Person Not detected !!!
        </Alert>

        
        </Col>
    
  </Row>
      </Container>
    );
  }

  // return <Button onClick={() => set_show_spinner(true)}>Show Alert</Button>;
}
export default SuccessAlert;
