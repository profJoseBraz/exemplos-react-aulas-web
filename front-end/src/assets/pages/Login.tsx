import { CSSProperties, ChangeEvent, useState } from "react";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
// import './Login.css'
import Style from "./Login.module.css";
import axios from "axios";

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

    async function getUsers(){
        try{
            const res = await axios.get("http://localhost:8080");
            alert(res.data);
        }catch{Error}{
            alert("Nenhum usuário encontrado");
        }
    }
    
    const handleOnClick = () => {
        getUsers();

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
                    placeholderFocusedColor="white"
                    onChange={handleUserOnChange}
                    value={loginFail ? "" : user}
                    style={{
                        width: "500px",
                        height: "50px",
                        backgroundColor: "#f0f0f0",
                        margin: "5px"
                    }}
                    focusStyle={{
                        backgroundColor: "gray",
                        color: "white",
                    }}
                />

                <MyInput
                    type="password"
                    placeholder="Senha"
                    placeholderFocusedColor="white"
                    onChange={handlePasswordOnChange}
                    value={loginFail ? "" : password}
                    style={{
                        width: "500px",
                        height: "50px",
                        backgroundColor: "#f0f0f0",
                        margin: "100px 0"
                    }}
                    focusStyle={{
                        backgroundColor: "gray",
                        color: "white",
                    }}
                />

                <MyButton
                    onClick={handleOnClick}
                    style={{
                        width: "200px",
                        backgroundColor: "#f0f0f0",
                        margin: "5px"
                    }}
                >
                    Entrar
                </MyButton>
            </div>
        </div>
    );
}

export default Login;
