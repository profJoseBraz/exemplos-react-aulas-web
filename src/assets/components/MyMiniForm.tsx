import MyButton from "./MyButton";
import MyInput from "./MyInput";
import './MyMiniForm.css'

interface Props{
    onSubmit: () => void;
}

function MyMiniForm({onSubmit}: Props){
    return(
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
            />
            <MyButton onClick={onSubmit} height="50px">
                adicionar
            </MyButton>
        </div>
    );
}

export default MyMiniForm;