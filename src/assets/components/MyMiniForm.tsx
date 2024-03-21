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
                fontColor="black"
                bgColor="#f0f0f0"
                fontFocusedColor="white"
                bgColorFocused="#8207a7"
                placeHolderFontColor="black"
                placeHolderFocusedFontColor="white"
                onChange={onInputChange}
                value={inputValue}
            />
            <MyButton onClick={onButtonClick} height="50px">
                adicionar
            </MyButton>
        </div>
    );
}

export default MyMiniForm;
