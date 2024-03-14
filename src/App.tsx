import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Example1 from "./assets/pages/Example1";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Example1 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
