import { useState } from 'react';
import './MyInput.css'

interface Props{
    type: string;
    
    bgColor?:string;
    fontColor?:string;
    
    bgColorFocused?:string;
    fontFocusedColor?:string;
    
    placeholder?: string;
    placeHolderFontColor?:string;
    placeHolderFocusedFontColor?:string;
}

function MyInput(props : Props){

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    const normalStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.fontColor}`
    };
    
    const focusedStyle = {
        backgroundColor: `${props.bgColorFocused}`,
        color: `${props.fontFocusedColor}`,
        // color: `${props.fontFocusedColor}`
    };

    const placeHolder = `::placeholder {${isFocused ? `color: ${props.placeHolderFocusedFontColor}` : `color: ${props.placeHolderFontColor}`}}`
    
    return(
        <>
        <input 
        type={props.type} 
        placeholder={props.placeholder} 
        style={isFocused ? focusedStyle : normalStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}/>
        
        <style> 
            {placeHolder}
        </style>
        </>
    );
}

export default MyInput