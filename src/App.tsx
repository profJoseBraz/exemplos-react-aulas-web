import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ToDoList from "./assets/pages/ToDoList";
import Login from "./assets/pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/to-do-list" element={<ToDoList />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
