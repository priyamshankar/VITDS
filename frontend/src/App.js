import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DriverHome from "./pages/DriverHome";
import OwnerTrackMain from "./pages/OwnerTrackMain";
import DriversLocation from "./pages/DriversLocation";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
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
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
