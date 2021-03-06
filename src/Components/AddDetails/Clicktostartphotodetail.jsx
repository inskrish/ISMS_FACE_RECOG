import { useState } from "react";
import Button from "@material-ui/core/Button";
import { isMobile } from "react-device-detect";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddPhotoDetail } from "./AddPhotoDetail";


function Clicktostartphotodetail() {

  const [isCaptureEnable, setCaptureEnable] = useState(true);
  const [showOpenBtn, setShowOpenBtn] = useState(false);
  // for start button disable

  const showOpenBtnFn = () => {
    setShowOpenBtn(true);
    setCaptureEnable(false);
  };

  return (
    <>
    <div
      // style={{
      //   justifyContent: "center",
      //   textAlign: "center",
      //   padding: "20px",
      //   position: "absolute",
      //   top: "50%",
      //   left: "50%",
      //   marginTop: "-50px",
      //   marginLeft: "-50px",
      //   width: "100px",
      //   height: "100px"
      // }}
    >
      {showOpenBtn && (
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: "20px" }}
          onClick={() => setCaptureEnable(true)}
        >
          Warning Camera Not found
        </Button>
      )}
      {/* <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: "20px" }}
        onClick={() => {
          setCaptureEnable(true)
        }}
      >
        Start
      </Button> */}
      {/* {isCaptureEnable && <WebcamCapture setShowOpenBtn={showOpenBtnFn} />} */}
      {isCaptureEnable && <AddPhotoDetail />}

    </div>
    </>
  );
  
}

export default Clicktostartphotodetail;

