import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DriverHome from "./pages/DriverHome";
import OwnerTrackMain from "./pages/OwnerTrackMain";
import DriversLocation from "./pages/DriversLocation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/track" element={<DriverHome/>}/>
          <Route path="/" element={<OwnerTrackMain/>}/>
          <Route path="/location" element={<DriversLocation/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
