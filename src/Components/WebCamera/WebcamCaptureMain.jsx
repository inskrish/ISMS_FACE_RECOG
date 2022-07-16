import { useRef, useState, useEffect, useContext } from "react";
import Webcam from "react-webcam";
import { isMobile } from "react-device-detect";
import Resizer from "react-image-file-resizer";
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import axios from "axios";
import FormExample from "../FormComponent/FormExample";
import GetAadhar from "../GetAadhar/GetAadhar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Spinner, Container } from "react-bootstrap";
import { UserContext } from "../Context/WebcamContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import SuccessAlert from "../Alert/SuccessAlert"
import ImageComponent from "../FormComponent/ImageComponent";
import "./web.css";
var i = 0;
var data = [];
const baseURL = "http://11.0.0.221:8000/uploadImage/";
export const WebcamCaptureMain = (props) => {
 // console.log(props.click);
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
    set_show_Warning_alert
  } = useContext(UserContext);

  const [disbleCapture, setDisbleCapture] = useState(true);
  const [display_form, set_display_form] = useState(false);
  const [disable_btn, set_btn] = useState(true);
  // const [display_webcam, set_display_webcam] = useState(false);

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
  const styles1 = {
    padding:"10px",
    
    display:"flex" , 
    
};
  const [screenShots, setScreenShots] = useState([]);
  const webcamRef = useRef(null);
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        200,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const capture = async () => {
    set_show_spinner(true);
    set_btn(false);
    // alert(isMobile);
    data = [];
    setScreenShots([]);
    for (i = 0; i < 5; i++) {
      await sleep(1000);

      let imageSrc = webcamRef.current?.getScreenshot();
      console.log(imageSrc);
      data.push(imageSrc);

      const newFile = getFilefromBlob(imageSrc, `image.jpeg`);
      const newBlob = await resizeFile(newFile);
      setScreenShots((prevState) => [...prevState, newBlob]);
    }

    const form = new FormData();
    form.append("photo0", data[0]);
    form.append("photo1", data[1]);
    form.append("photo2", data[2]);
    form.append("photo3", data[3]);
    form.append("photo4", data[4]);
    const response = await axios.post(baseURL, form);
    console.log(response.data);

    if (response.data === "unknown") {
      // alert("You are unknown try with aadhar number!!");
      set_display_form(false);
      set_show_spinner(false);
      set_btn(true);
      set_show_Warning_alert(true)

    } else {
      set_show_Success_alert(true)
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
      set_display_form(true);
      set_btn(true);
      set_show_spinner(false);
    }
  };
console.log("here"+props.state);
  const showOpenbtn = () => {
    // setShowOpenBtn();
  };

  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  const getFilefromBlob = (dataurl, filename) => {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  };

  const getBlobFromFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  console.log({ data });

  const styles = {
    Container: {
      paddingLeft: "1rem",
      paddingRight: "2rem",
      paddingTop:"3%",
      // backgroundColor: "rgb(53, 72, 104)",
    },
    row: {
      // marginLeft: "2rem",
      // marginRight: "2rem"
    },
    col: {
      // borderLeft: "solid 1px",
    },
    verticalLine: {
      borderRight: "solid gray 1px",
      borderLeft: "solid gray 1px"
    }
  };

  return (
    <div>
        <Col sm={4 } style={{display:"flex",justifyContent:"center"}} >
              {/* <Dialog open={open} fullWidth onClose={handleClose}> */}

              {/* { display_webcam &&  */}

              <div /*style={{ justifyContent: "center", textAlign: "center" }}*/>
            
              
              {show_Success_alert && <SuccessAlert/>}
                { show_Warning_alert &&  <SuccessAlert/>}
             
              <>
                <div style={{ padding: "1rem"  }}>
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    minScreenshotHeight={200}
                    screenshotQuality={1}
                    minScreenshotWidth={100}
                    forceScreenshotSourceSize
                    onUserMediaError={showOpenbtn}
                    onUserMedia={() => {
                      setDisbleCapture(false);
                    }}
                    // onClick={() => {
                    //   alert(1);
                    // }}
                    height={"90%"}
                    width={"90%"}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{
                      height: 1080,
                      width: 1920,
                      facingMode: "environment",
                    }}
                  />
                </div>
              
              
                <div style={{ marginLeft:"-75px",marginTop: "15px" }}>
                  {disable_btn && (
                    <Container
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="primary"
                        color="primary"
                        onClick={capture}
                        disabled={disbleCapture}
                      >
                        Capture
                      </Button>
                    </Container>
                  )}
                  {show_spinner && (
                    <Container
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
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
                </div>
                </>
          


                <div style={{ margin: "20px" }}>
                  {screenShots.map((item, index) => {
                    return (
                      <span style={{ padding: "10px" }} key={index}>
                        <img
                          src={item}
                          alt={index}
                          style={{ width: "60px", height: "60px" }}
                        ></img>
                      </span>
                    );
                  })}

                  
                  {/* {() => {
              setScreenShots([])
              }} */}
                </div>
              </div>
            </Col>
    </div>
  )
}

