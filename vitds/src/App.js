import { BrowserRouter, Route, Routes } from "react-router-dom";
import DriverHome from "./pages/DriverHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DriverHome/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
