import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DriverHome from "./pages/DriverHome";
import OwnerTrackMain from "./pages/OwnerTrackMain";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/track" element={<DriverHome/>}/>
          <Route path="/" element={<OwnerTrackMain/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
