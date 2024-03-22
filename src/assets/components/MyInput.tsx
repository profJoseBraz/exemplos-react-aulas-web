import { CSSProperties, ChangeEvent, useState } from "react";
import style from "./MyInput.module.css";

interface Props {
    type: string;
    value?: string;
    placeholder?: string;
    
    style?: CSSProperties;
    focusStyle?: CSSProperties;

    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function MyInput(props: Props) {
    const [isFocused, setIsFocused] = useState(false);

    //Constante utilizada para guardar a referência à função referente à atualização do estado de focus para quando o mouse entra no input.
    const handleFocus = () => {
        setIsFocused(true);
    };

    //Constante utilizada para guardar a referência à função referente à atualização do estado de focus para quando o mouse sai no input.
    const handleBlur = () => {
        setIsFocused(false);
    };

    // const placeHolder = `::placeholder {${
    //     isFocused
    //         ? `color: red`
    //         : `color: blue`
    // }}`;

    const combinedStyle: CSSProperties = {
        ...props.style,
        ...(isFocused && props.focusStyle),
    };

    return (
        <>
            <input
                className={style.MyInput}
                type={props.type}
                placeholder={props.placeholder}
                style={combinedStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={props.onChange}
                value={props.value}
            />

            {/* <style>{placeHolder}</style> */}
        </>
    );
}

export default MyInput;
