import {Route, Routes} from "react-router-dom";
import Public from "./pages/Public.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Public />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </>
  )
}

export default App
