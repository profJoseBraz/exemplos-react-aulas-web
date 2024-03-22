import { ChangeEvent, useState } from "react";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";    
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
// import './Login.css'
import Style from "./Login.module.css"

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [loginFail, setLoginFail] = useState(false);

    //Necessita da dependência 'react-cookie'
    const [cookie, setCookie, removeCookie] = useCookies(["auth"]);

    const navigate = useNavigate();

    const handleUserOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    };

    const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleOnClick = () => {
        if (user === "jose" && password === "1234") {
            setCookie("auth", "josé");
            navigate("/to-do-list"); //necessita da dependência 'react-router-dom'
        } else {
            setLoginFail(true);
            setUser("");
            setPassword("");
            alert("Usuário ou senha incorreto!");
            setLoginFail(false);
        }
    };

    return (
        <div className={Style.LoginContainer}>
            <div className={Style.LoginForm}>
                <MyInput
                    type="text"
                    placeholder="Usuário"
                    bgColor="#f0f0f0"
                    onChange={handleUserOnChange}
                    value={loginFail ? "" : user}
                />

                <MyInput
                    type="password"
                    placeholder="Senha"
                    bgColor="#f0f0f0"
                    onChange={handlePasswordOnChange}
                    value={loginFail ? "" : password}
                />

                <MyButton onClick={handleOnClick}>Entrar</MyButton>
            </div>
        </div>
    );
}

export default Login;
