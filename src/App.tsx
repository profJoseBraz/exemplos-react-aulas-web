import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Example1 from "./assets/pages/ToDoList";
import Login from "./assets/pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Example1 />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
