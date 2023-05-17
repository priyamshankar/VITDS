import React, { useEffect, useRef, useState,useCallback, } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../Context/SocketProvider";
import NavbarComponent from "../components/NavbarComponent";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../state/index";
import Webcam from "react-webcam";
// import getResult from '../api/getResult'
import axios from "axios";

const DriverHome = () => {

  const [show, toggleShow] = useState(false);
  const [isThreat, setisThreat] = useState(null);
  // const vehicleNo = "WB32AP1234";
  // const dispatch = useDispatch();

  //webcam starts here function
  // const WebcamComponent = () => <Webcam />;
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);


  // const fetchRes = async () => {

  //   await axios.get("http://localhost:8080/ifThreat")
  //     .then((response) => {
  //       console.count("Data", response.data?.message);
  //       setisThreat(response.data.message);
  //     }).catch((err) => {
  //       console.log("Error received:", err);
  //     });

  // }

  //webcam ends here 
  // this use effect will take place at mounting
  useEffect(() => {
    console.log("Adding new interval");
    const timer = setInterval(() => {

      axios.get("http://localhost:8080/ifThreat")
      .then((response) => {
        console.log("Data", response);
        setisThreat(response.data.message);
        console.log("New value of is threat: ", isThreat);
      }).catch((err) => {
        console.log("Error received:", err);
      });

    }, 5000);


    return () => {
      console.log("Previous set interval is cleared");
      clearInterval(timer);
    };

  });

  useEffect(() => {

    console.log("Is threat is changed and new values : ", isThreat);

    /* here dispatch will take place
    if (isThreat) {
      // dispatch(actionCreators.threat(vehicleNo));
    } else {
      // dispatch(actionCreators.threat("false"));
    }
    */
  }, [isThreat]);

  // const videoRef = useRef(null);
  const startVdo = () => {
    // getVideo();
  };

  // const getVideo = () => {
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
  // };

  const stopVideo = () => {
    // let videoElem = videoRef.current;
    // const stream = videoElem.srcObject;
    // const tracks = stream.getTracks();
    // tracks.forEach((track) => {
    //   track.stop();
    // });
  };


  // ********************* web rtc code starts from here &&*&&^&^&^&^*^*^*&^*^*^**************

  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("DL01AB2903");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);


  return (
    <>
      <NavbarComponent />
      <h1>DL01AB2903</h1>
      {/* <div className="container media-heading"> */}
        {/* <video className="center-block " ref={videoRef} /> */}
        {/* <div className="center-block media-body">
          <button
            className="btn bg-primary center-block"
            onClick={() => {
              toggleShow(!show);
              show ? stopVideo() : startVdo()
            }}
          >
            {show ? "Stop" : "Start"}
          </button>
        </div> */}
      {/* </div> */}
      {/* <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      /> */}
      {/* <button onClick={capture}>Capture photo</button>
      {imgSrc && (
        <img alt="imgsrc"
          src={imgSrc}
        />
      )} */}


    </>
  );
};

export default DriverHome;