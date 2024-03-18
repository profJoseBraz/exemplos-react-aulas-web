import { ChangeEvent, useState } from 'react';
import style from './MyInput.module.css'

interface Props{
    type: string;
    
    value?: string;

    bgColor?:string;
    fontColor?:string;
    
    bgColorFocused?:string;
    fontFocusedColor?:string;
    
    placeholder?: string;
    placeHolderFontColor?:string;
    placeHolderFocusedFontColor?:string;

    onChange?: (e : ChangeEvent<HTMLInputElement>) => void;
}

function MyInput(props : Props){

    const [isFocused, setIsFocused] = useState(false);

    //Constante utilizada para guardar a referência à função referente à atualização do estado de focus para quando o mouse entra no input.
    const handleFocus = () => {
        setIsFocused(true);
    }

    //Constante utilizada para guardar a referência à função referente à atualização do estado de focus para quando o mouse sai no input.
    const handleBlur = () => {
        setIsFocused(false);
    }

    //Constante que guarda os estilos pedrões do input
    const normalStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.fontColor}`
    };
    
    //Constante que guarda os estilos modificados do input. Por exemplo, quando o input estiver focado ou com hover pode ser aplicado esse estilo em vez do estilo padrão 
    const focusedStyle = {
        backgroundColor: `${props.bgColorFocused}`,
        color: `${props.fontFocusedColor}`,
        // color: `${props.fontFocusedColor}`
    };

    const placeHolder = `::placeholder {${isFocused ? `color: ${props.placeHolderFocusedFontColor}` : `color: ${props.placeHolderFontColor}`}}`
    
    return(
        <>
        <input
        className={style.MyInput} 
        type={props.type} 
        placeholder={props.placeholder} 
        style={isFocused ? focusedStyle : normalStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={props.onChange}
        value={props.value}/>
        
        <style> 
            {placeHolder}
        </style>
        </>
    );
}

export default MyInput