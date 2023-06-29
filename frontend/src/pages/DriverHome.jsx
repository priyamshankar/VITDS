import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSocket } from "../Context/SocketProvider";
import NavbarComponent from "../components/NavbarComponent";
import ReactPlayer from "react-player";
import peer from "../service/peer";
import cam from "../globalRes/cam.png";
import "./css/DriverHome.css";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../state/index";
import Webcam from "react-webcam";
// import getResult from '../api/getResult'
import axios from "axios";

const DriverHome = () => {
  const carNo = useParams();
  const [show, toggleShow] = useState(false);
  const [isThreat, setisThreat] = useState(null);
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
  // useEffect(() => {
  //   console.log("Adding new interval");
  //   const timer = setInterval(() => {
  //     axios
  //       .get("http://localhost:8080/ifThreat")
  //       .then((response) => {
  //         console.log("Data", response);
  //         setisThreat(response.data.message);
  //         console.log("New value of is threat: ", isThreat);
  //       })
  //       .catch((err) => {
  //         console.log("Error received:", err);
  //       });
  //   }, 5000);

  //   return () => {
  //     console.log("Previous set interval is cleared");
  //     clearInterval(timer);
  //   };
  // });




  // ********************* web rtc code starts from here &&*&&^&^&^&^*^*^*&^*^*^**************

  // const [email, setEmail] = useState("");
  // const [room, setRoom] = useState("DL01AB2903");

  // const socket = useSocket();
  // const navigate = useNavigate();

  // const handleSubmitForm = useCallback(() => {
  //   socket.emit("room:join", { email, room });
  // }, [email, room, socket]);

  // useEffect(() => {
  //   handleSubmitForm();
  //   return () => {
  //     // handleSubmitForm();
  //   };
  // }, []);

  // const handleJoinRoom = useCallback(
  //   (data) => {
  //     const { email, room } = data;
  //     // navigate(`/track/${room}`);
  //   },
  //   [navigate]
  // );

  // useEffect(() => {
  //   socket.on("room:join", handleJoinRoom);
  //   return () => {
  //     socket.off("room:join", handleJoinRoom);
  //   };
  // }, [socket, handleJoinRoom]);

  // *************************video Streaming Logic ************************

  // const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(true);
  const [myStream, setMyStream] = useState(null);
  // const [remoteStream, setRemoteStream] = useState();

  // const handleUserJoined = useCallback(({ email, id }) => {
  //   console.log(`Email ${email} joined room`);
  //   setRemoteSocketId(id);
  // }, []);

  // const handleCallUser = useCallback(async () => {
  //   const stream = await navigator.mediaDevices.getUserMedia({
  //     audio: true,
  //     video: true,
  //   });
  //   const offer = await peer.getOffer();
  //   socket.emit("user:call", { to: remoteSocketId, offer });
  //   setMyStream(stream);
  // }, [remoteSocketId, socket]);

  // const handleIncommingCall = useCallback(
  //   async ({ from, offer }) => {
  //     setRemoteSocketId(from);
  //     const stream = await navigator.mediaDevices.getUserMedia({
  //       audio: true,
  //       video: true,
  //     });
  //     setMyStream(stream);
  //     console.log(`Incoming Call`, from, offer);
  //     const ans = await peer.getAnswer(offer);
  //     socket.emit("call:accepted", { to: from, ans });
  //   },
  //   [socket]
  // );

  // const sendStreams = useCallback(() => {
  //   for (const track of myStream.getTracks()) {
  //     peer.peer.addTrack(track, myStream);
  //   }
  // }, [myStream]);

  // const handleCallAccepted = useCallback(
  //   ({ from, ans }) => {
  //     peer.setLocalDescription(ans);
  //     console.log("Call Accepted!");
  //     sendStreams();
  //   },
  //   [sendStreams]
  // );

  // const handleNegoNeeded = useCallback(async () => {
  //   const offer = await peer.getOffer();
  //   socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  // }, [remoteSocketId, socket]);

  // useEffect(() => {
  //   peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
  //   return () => {
  //     peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
  //   };
  // }, [handleNegoNeeded]);

  // const handleNegoNeedIncomming = useCallback(
  //   async ({ from, offer }) => {
  //     const ans = await peer.getAnswer(offer);
  //     socket.emit("peer:nego:done", { to: from, ans });
  //   },
  //   [socket]
  // );

  // const handleNegoNeedFinal = useCallback(async ({ ans }) => {
  //   await peer.setLocalDescription(ans);
  // }, []);

  // useEffect(() => {
  //   peer.peer.addEventListener("track", async (ev) => {
  //     const remoteStream = ev.streams;
  //     console.log("GOT TRACKS!!");
  //     setRemoteStream(remoteStream[0]);
  //   });
  // }, []);

  // useEffect(() => {
  //   socket.on("user:joined", handleUserJoined);
  //   socket.on("incomming:call", handleIncommingCall);
  //   socket.on("call:accepted", handleCallAccepted);
  //   socket.on("peer:nego:needed", handleNegoNeedIncomming);
  //   socket.on("peer:nego:final", handleNegoNeedFinal);

  //   return () => {
  //     socket.off("user:joined", handleUserJoined);
  //     socket.off("incomming:call", handleIncommingCall);
  //     socket.off("call:accepted", handleCallAccepted);
  //     socket.off("peer:nego:needed", handleNegoNeedIncomming);
  //     socket.off("peer:nego:final", handleNegoNeedFinal);
  //   };
  // }, [
  //   socket,
  //   handleUserJoined,
  //   handleIncommingCall,
  //   handleCallAccepted,
  //   handleNegoNeedIncomming,
  //   handleNegoNeedFinal,
  // ]);

  return (
    <>
      <NavbarComponent />
      <div className="DriverNamecontainer">
        <h1>{carNo.carRegNo}</h1>
        
        <div className="driverHomeNocam">
          {remoteSocketId && !myStream ? (
            <>
              <img src={cam} alt="camera image" />
              <p>Driver cam Not available</p>
            </>
          ) : (
            <p>Showing the live feed</p>
          )}
        </div>
        {/* {myStream && (
          <div className="videoFeedDriverHome">
            <ReactPlayer
              playing
              muted
              height="500px"
              width="800px"
              url={myStream}
            />
          </div>
        )} */}
      </div>
    </>
  );
};

export default DriverHome;
