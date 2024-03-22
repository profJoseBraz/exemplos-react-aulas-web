import { CSSProperties, ChangeEvent, useState } from "react";
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
                    onChange={handleUserOnChange}
                    value={loginFail ? "" : user}
                    style={{
                        width: '500px', 
                        height: '50px', 
                        backgroundColor: '#f0f0f0'
                    }}
                    focusStyle={{
                        backgroundColor: 'red',
                    }}
                />

                <MyInput
                    type="password"
                    placeholder="Senha"
                    onChange={handlePasswordOnChange}
                    value={loginFail ? "" : password}
                    style={{
                        width: '500px', 
                        height: '50px', 
                        backgroundColor: '#f0f0f0'
                    }}
                    focusStyle={{
                        backgroundColor: 'red',
                    }}
                />

                <MyButton 
                    onClick={handleOnClick}
                    style={{
                        fontSize: '20px',
                        width: 'fit-content',
                        backgroundColor: '#f0f0f0'
                    }}
                >Entrar</MyButton>
            </div>
        </div>
    );
}

export default Login;
