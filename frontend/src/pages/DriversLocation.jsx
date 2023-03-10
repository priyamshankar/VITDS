import React,{useState} from "react";
import './css/DriverLocation/DriverLocation.css';
import NavbarComponent from "../components/NavbarComponent";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

const center = {
  lat: 26.893833,
  lng: 80.942574,
};

let driversNearMe = [
  {
    name: "John Doe",
    id: "nearme110",
    loc: {
      lat: 26.846695,
      lng: 80.946167,
    },
    ind: 0,
    no:"DL01AB2903"
  },
  {
    name: "steve",
    id: "nearme111",
    loc: {
      lat: 26.867235,
      lng: 80.923526,
    },
    ind: 1,
    no:"HR03BT3967"
  },
  {
    name: "josh",
    id: "nearme112",
    loc: {
      lat: 26.893599,
      lng: 80.942516,
    },
    ind: 2,
    no:"WB32AP1234"
  },{
    name: "John Doe",
    id: "nearme113",
    loc: {
      lat: 26.846400,
      lng: 80.946200,
    },
    ind: 3,
    no:"BR22TP5434"
  },{
    name: "John Doe",
    id: "nearme114",
    loc: {
      lat: 26.846123,
      lng: 80.9469876,
    },
    ind: 4,
    no:"UP13AD1784"
  },{
    name: "John Doe",
    id: "nearme115",
    loc: {
      lat: 26.846098,
      lng: 80.946000,
    },
    ind: 5,
    no:"WB05YL6234"
  },
];

const DriversLocation = () => {
  const [currentSelected, setcurrentSelected] = useState();
  const [driverdata, setdriverData] = useState(driversNearMe);
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));

  //**** google map api changes starts here ....****

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAVJiAbZv0X4UEFg7LswS7i7xATGKf53mc",
  });

  if (!isLoaded) {
    return "Map is Loading";
  }

  return (
    <div>
      <NavbarComponent/>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100vw", height: "90vh" }}
        onLoad={(map) => setMap(map)}
      >
        {driverdata &&
          driverdata.map((mark, index) => {
            // <div key={mark.id}>
            <Marker position={driverdata[index].loc} />; // here is the problem markers are not loading when fetched from nearmestudentdata.map
            // </div>;
          })}
        <Marker position={driverdata[0].loc} /> // here marker is working
        but inside NearmeStudentData.map it is not working
        {/* <Marker position={center} options={{icon: dotImage}}/> */}
      </GoogleMap>

      <div className="button-container">
        {driversNearMe.map((button, index) => (
          <button
            key={button.id}
            className={
              button.id == currentSelected
                ? "button-selected"
                : "button-unselected"
            }
            onClick={() => {
              setcurrentSelected(button.id);
              map.panTo(button.loc);
            }}
          >
            {button.no} 
          </button>
        ))}
      </div>
    </div>
  );
};

export default DriversLocation;
