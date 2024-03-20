import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ToDoList from "./assets/pages/ToDoList";
import Login from "./assets/pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/to-do-list" element={<ToDoList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
