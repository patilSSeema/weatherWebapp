import "./App.css";

import { Route, Routes } from "react-router";
import Home from "./Component/Home";
import DisplayForcastData from "./Component/DisplayForcastData";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weatherdata/:city" element={<DisplayForcastData />} />
      </Routes>
    </>
  );
}

export default App;
