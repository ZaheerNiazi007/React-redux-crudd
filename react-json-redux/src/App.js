import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddUserComp from "./pages/AddUserComp";
import EditUserComp from "./pages/EditUserComp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUserComp />} />
        <Route path="/edituser/:id" element={<EditUserComp />} />
      </Routes>
    </div>
  );
}

export default App;
