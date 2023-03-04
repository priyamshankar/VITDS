import React, { useEffect, useRef, useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";

const DriverHome = () => {
  const [show, toggleShow] = useState(false);
  const [isThreat, setisThreat] = useState("false");
  const vehicleNo = "WB32AP1234";
  const dispatch = useDispatch();

  useEffect(() => {
    const setRequestInterval = setInterval(() => {
      temp();
      console.log("hello");
    }, 2000);
    return () => {
      // setRequestInterval();
    };
  }, []);

  useEffect(() => {
    return () => {
      if (isThreat) {
        dispatch(actionCreators.threat(vehicleNo));
        // console.log(vehicleNo);
        // console.log("debug inside condition useeffect driver home working")
      } else {
        dispatch(actionCreators.threat("false"));
      }
      // console.log("debug inside useffect driver home working");
    };
  }, [isThreat]);

  const videoRef = useRef(null);

  const startVdo = () => {
    getVideo();
  };

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const stopVideo = () => {
    let videoElem = videoRef.current;
    const stream = videoElem.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
      track.stop();
      // track.blur();
    });
    //   videoElem.srcObject = null;
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
    // console.log(data);
    // return data;
  };
  // console.log(temp);
  temp();
  temp();
  temp();
  temp();
  return (
    <>
      <NavbarComponent />
      <div className="container media-heading">
        <video className="center-block " ref={videoRef} />
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
    </>
  );
};

export default DriverHome;
