import {Route, Routes} from "react-router-dom";
import Public from "./pages/Public.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Admin from "./pages/Admin.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Profile from "./pages/Profile.jsx";
import Todo from "./pages/todo/Index.jsx";
import CreateToto from "./pages/todo/Create.jsx";
import EditTodo from "./pages/todo/Edit.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Public />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/todo/create" element={<CreateToto />} />
            <Route path="/todo/edit" element={<EditTodo />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  )
}

export default App
