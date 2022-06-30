import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { isMobile } from "react-device-detect";
import Resizer from "react-image-file-resizer";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import axios from "axios";
import FormExample from "../FormComponent/FormExample";
import GetAadhar from "../GetAadhar/GetAadhar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

var i = 0;
var data = [];
const baseURL = "http://11.0.0.221:8000/uploadImage/";

export const WebcamCapture = (props) => {
  const { setShowOpenBtn } = props;
  const [disbleCapture, setDisbleCapture] = useState(true);
  const [display_form, set_display_form] = useState(false);
  const [settling_props, set_settling_props] = useState({
    name: "",
    rank: "",
    phnumber: "",
    aadhar: "",
    cat: "",
    gender: "",
    blacklist: "",
    snumber: "",
  });

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
      set_display_form(false);
    } else {
      set_display_form(true);
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
      });
    }
  };

  const showOpenbtn = () => {
    setShowOpenBtn();
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

  return (
    <div style={styles.Container}>
      <Row style={styles.row}>
        <Col sm={4} style={styles.col}>
          {/* <Dialog open={open} fullWidth onClose={handleClose}> */}
          <div /*style={{ justifyContent: "center", textAlign: "center" }}*/>
            <div style={{ padding: "10px" }}>
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
                height={"100%"}
                width={"100%"}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  height: 1080,
                  width: 1920,
                  facingMode: "environment",
                }}
              />
            </div>

            <div style={{ marginTop: "15px" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={capture}
                disabled={disbleCapture}
              >
                Capture
              </Button>
            </div>

            <div style={{ margin: "20px" }}>
              {screenShots.map((item, index) => {
                return (
                  <span style={{ marginRight: "10px" }} key={index}>
                    <img
                      src={item}
                      alt={index}
                      style={{ width: "100px", height: "100px" }}
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

        <Col sm={8} style={styles.col}>
          {display_form && <FormExample data={settling_props} />}
          {!display_form && <GetAadhar />}

          {/* </Dialog> */}
        </Col>
      </Row>
    </div>
  );
};
