import React, { useEffect, useRef, useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import Webcam from "react-webcam";

const DriverHome = () => {
  const [show, toggleShow] = useState(false);
  const [isThreat, setisThreat] = useState("false");
  const vehicleNo = "WB32AP1234";
  const dispatch = useDispatch();
  
//webcam starts here function

  const WebcamComponent = () => <Webcam />;
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);


  //webcam ends here 

  useEffect(() => {
    const setRequestInterval = setInterval(() => {
      temp();
      console.log("hello");
    }, 2000);
    return () => {
    };
  }, []);

  useEffect(() => {
    return () => {
      if (isThreat) {
        dispatch(actionCreators.threat(vehicleNo));
      } else {
        dispatch(actionCreators.threat("false"));
      }
    };
  }, [isThreat]);

  const videoRef = useRef(null);
  const startVdo = () => {
    // getVideo();
  };

  const getVideo = () => {
    // navigator.mediaDevices
    //   .getUserMedia({ video: true, audio: true })
    //   .then((stream) => {
    //     let video = videoRef.current;
    //     video.srcObject = stream;
    //     video.play();
    //   })
    //   .catch((err) => {
    //     console.error("error:", err);
    //   });
  };

  const stopVideo = () => {
    // let videoElem = videoRef.current;
    // const stream = videoElem.srcObject;
    // const tracks = stream.getTracks();
    // tracks.forEach((track) => {
    //   track.stop();
    // });
  };
  const temp = async () => {
    axios
      .post("http://localhost:8080/api/postpic/ifthreat", {
        firstname: "dummy",
        lastname: "data",
      })
      .then(
        (res) => {
          if (res.data.msg === "true") {
            setisThreat("true");
            console.log(res.data.msg);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  };

  return (
    <>
      <NavbarComponent />
      <div className="container media-heading">
        {/* <video className="center-block " ref={videoRef} /> */}
        <div className="center-block media-body">
          <button
            className="btn bg-primary center-block"
            onClick={() => {
              toggleShow(!show);
              {
                show ? stopVideo() : startVdo();
              }
            }}
          >
            {show ? "Stop" : "Start"}
          </button>
        </div>
      </div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && (
        <img
          src={imgSrc}
        />
      )}
    </>
  );
};

export default DriverHome;
