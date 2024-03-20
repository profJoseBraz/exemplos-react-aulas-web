import { ChangeEvent, useState } from "react";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleUserOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    }

    const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleOnClick = () => {
        if(user === "jose" && password === "1234"){
            navigate("/to-do-list");
        }else{
            alert("Usuário ou senha incorreto!")
        }
    }

    return (
        <div className="login">
            <MyInput type="text" bgColor="#f0f0f0" onChange={handleUserOnChange}/>
            <MyInput type="password" bgColor="#f0f0f0" onChange={handlePasswordOnChange}/>
            
            <MyButton onClick={handleOnClick}>Entrar</MyButton>
        </div>
    );
}

export default Login;
