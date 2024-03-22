import { ChangeEvent } from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import "./MyMiniForm.css";

interface Props {
    inputValue: string;

    onButtonClick: () => void;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function MyMiniForm({ inputValue, onButtonClick, onInputChange }: Props) {
    return (
        <div className="form-container">
            <MyInput
                type="text"
                placeholder="Digite algo"
                onChange={onInputChange}
                value={inputValue}
                style={{
                    width: '500px', 
                    height: '50px'
                }}
                focusStyle={{
                    backgroundColor: '#8b129d'
                }}
            />
            <MyButton onClick={onButtonClick} style={{height: '50px'}}>
                adicionar
            </MyButton>
        </div>
    );
}

export default MyMiniForm;
