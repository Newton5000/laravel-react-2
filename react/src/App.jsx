import {Route, Routes} from "react-router-dom";
import Public from "./pages/Public.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Admin from "./pages/Admin.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Profile from "./pages/Profile.jsx";
import Todo from "./pages/todo/Index.jsx";
import EditTodo from "./pages/todo/Edit.jsx";
import CreateTodo from "./pages/todo/Create.jsx";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Public />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/todo/create" element={<CreateTodo />} />
            <Route path="/todo/edit/:id" element={<EditTodo />} />
            <Route path="*" element={<ErrorPage status='404' />} />
        </Routes>
    </>
  )
}

export default App
