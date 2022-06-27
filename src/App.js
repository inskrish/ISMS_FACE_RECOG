import { WebcamCapture } from "./WebcamCapture";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { isMobile } from "react-device-detect";

function App() {
  const [isCaptureEnable, setCaptureEnable] = useState(true);
  const [showOpenBtn, setShowOpenBtn] = useState(true);


  // const [isCaptureEnable, setCaptureEnable] = useState(false);
  // const [showOpenBtn, setShowOpenBtn] = useState(false);
  // for start button 

  const showOpenBtnFn = () => {
    setShowOpenBtn(true);
    setCaptureEnable(false);
  };

  return (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: "-50px",
        marginLeft: "-50px",
        width: "100px",
        height: "100px"
      }}
    >
      {showOpenBtn && (
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: "20px" }}
          onClick={() => setCaptureEnable(true)}
        >
          Open Camera
        </Button>
      )}
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: "20px" }}
        onClick={() => {
          setCaptureEnable(true)
        }}
      >
        Start
      </Button>
      {isCaptureEnable && <WebcamCapture setShowOpenBtn={showOpenBtnFn} />}
    </div>
  );
}

export default App;
