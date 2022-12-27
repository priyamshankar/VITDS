import React, { useEffect, useRef,useState } from "react";
import NavbarComponent from "../components/NavbarComponent";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function OwnerTrackMain() {

    const [show,toggleShow]=useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    // getVideo();
    // startVdo();
  }, [videoRef]);

  const startVdo=() =>{
    getVideo();
  }

  const getVideo = () => {
    navigator.mediaDevices
        .getUserMedia({ video: true,audio: true })
        .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
        })
        .catch(err => {
        console.error("error:", err);
      });
  };

  const stopVideo = ()=>{
    let videoElem=videoRef.current;
    const stream = videoElem.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
    track.stop();
  });
//   videoElem.srcObject = null;
  }

  return (
  <>
  <NavbarComponent/>
  <div className="container media-heading">
        <video className="center-block " ref={videoRef} />
    <div className="center-block media-body">
        <button className="btn bg-primary center-block" onClick={()=>{
            toggleShow(!show);
            {show ?   stopVideo():startVdo()}
        }}>
            {show ? "Stop": "Start"}
        </button>
    </div>
  </div>
  </>
  )
}

export default OwnerTrackMain