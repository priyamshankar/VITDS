import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DriverHome from "./pages/DriverHome";
import OwnerTrackMain from "./pages/OwnerTrackMain";
import DriversLocation from "./pages/DriversLocation";
import Counter from "./components/Counter"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/track" element={<DriverHome/>}/>
          <Route path="/" element={<OwnerTrackMain/>}/>
          <Route path="/location" element={<DriversLocation/>} />
          <Route path='/counter' element={<Counter/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
