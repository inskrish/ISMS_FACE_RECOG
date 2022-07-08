import { WebcamCapture } from "./WebcamCapture";
import { useState ,useContext} from "react";
import Button from "@material-ui/core/Button";
import { isMobile } from "react-device-detect";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from "../Context/WebcamContext";


function Clicktostart() {
  // const [isCaptureEnable, setCaptureEnable] = useState(true);
  // const [showOpenBtn, setShowOpenBtn] = useState(true);
  const { display_webcam, set_display_webcam } = useContext(UserContext);


  const [isCaptureEnable, setCaptureEnable] = useState(true);
  const [showOpenBtn, setShowOpenBtn] = useState(false);
  // for start button disable

  const showOpenBtnFn = () => {
    setShowOpenBtn(true);
    setCaptureEnable(false);
  };

  return (
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
      {/* {    set_display_webcam(false)} */}
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
      {console.log(display_webcam)}
      {isCaptureEnable && <WebcamCapture />}

    </div>
  );
  
}

export default Clicktostart;


// function Clicktostart() {
//   return(<>
// {<WebcamCapture setShowOpenBtn={true} />}

//   </>)

// }

// export default Clicktostart;
