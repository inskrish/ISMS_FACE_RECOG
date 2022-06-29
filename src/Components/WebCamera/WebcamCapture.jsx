import { useRef, useState ,useEffect} from "react";
import Webcam from "react-webcam";
import { isMobile } from "react-device-detect";
import Resizer from "react-image-file-resizer";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import axios from "axios";


var i=0;
var data=[];
const baseURL = "http://11.0.0.221:8000/temp/";

// useEffect(() => {
//   // POST request using axios inside useEffect React hook
//   const article = { title: 'React Hooks POST Request Example' };
//   axios.post(baseURL, article)
//       .then(response => console.log(response.data.id));

// // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);

// useEffect(() => {
//   axios.post(`/temp`,x).then(res => {
//     const users = res.data;
//     console.log(users)
//   })})

  // axios
  //   .all([axios.get(`/users`), axios.get(`/api/breeds/image/random`)])
  //   .then(
  //     axios.spread((user, dog) => {
  //       const users = user.data;
  //       setUsers(users);

  //       const dogs = dog.data;
  //       setDogs(dogs);
  //     })
  //   );
// }, []);



export const WebcamCapture = (props) => {
  const { setShowOpenBtn } = props;
  const [disbleCapture, setDisbleCapture] = useState(true);
  // const [img_url, setImg_url] = useState([]);
  const [screenShots, setScreenShots] = useState([]);
  const webcamRef = useRef(null);
  // var img_json=[]
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
      return new Promise(resolve => setTimeout(resolve, ms));
  }
  const capture = async () => {
    // alert(isMobile);
    for (i = 0; i < 5; i++) {
      await sleep(1000);
     
  
    let imageSrc = webcamRef.current?.getScreenshot();
    console.log(imageSrc);
    // data.push({
    //   photo:i,
    //   src:imageSrc
    // });
    data.push(imageSrc);

    const newFile = getFilefromBlob(imageSrc, `image.jpeg`);
    // console.log(newFile)
    // setImg_url(newFile)
    // img_json.push(newFile)
    // console.log(img_json);
    const newBlob = await resizeFile(newFile);
    setScreenShots((prevState) => [...prevState, newBlob]);
  }



  let data_arr={'photo0': "data[0]", 'photo1':" data[1]", 'photo2': "data[2]", 'photo3': "data[3]", 'photo4':" data[4]"}
  let data_arr2 = JSON.stringify(data_arr)


  // const x = {text:"hello"};
  // const x="hi"
  // const response = await axios.post(baseURL, x);
  // console.log(response.data);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://11.0.0.221:8000/temp/');
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data_arr2);




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

console.log({data});  


  return (
    // <Dialog open={open} fullWidth onClose={handleClose}>
      <div /*style={{ justifyContent: "center", textAlign: "center" }}*/ >
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
              facingMode: "environment"
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
                <img src={item} alt={index} style={{width:'100px',height:'100px'}}></img>
              </span>
            );
          })}

        </div>
      
      </div>
    // </Dialog>
  );
};



// export screenShots too 