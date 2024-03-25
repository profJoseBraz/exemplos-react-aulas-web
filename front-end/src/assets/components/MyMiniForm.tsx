import { ChangeEvent } from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import style from "./MyMiniForm.module.css";

interface Props {
    inputValue: string;

    onButtonClick: () => void;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function MyMiniForm({ inputValue, onButtonClick, onInputChange }: Props) {
    return (
        <div className={style.formContainer}>
            <MyInput
                type="text"
                placeholder="Digite algo"
                placeholderFocusedColor="white"
                onChange={onInputChange}
                value={inputValue}
                style={{
                    width: "500px",
                    height: "50px",
                    fontSize: "18px",
                    margin: "10px 5px"
                }}
                focusStyle={{
                    backgroundColor: "#8b129d",
                    color: "white",
                }}
            />
            <MyButton 
                onClick={onButtonClick} 
                style={{ 
                    height: "50px",
                    fontSize: "18px"
                }}
            >
                adicionar
            </MyButton>
        </div>
    );
}

export default MyMiniForm;
