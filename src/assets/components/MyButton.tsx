import { ReactNode } from 'react';
import './MyButton.css'

interface Props{
    children: ReactNode;
    height?: string;
    onClick: () => void
}

function MyButton(props : Props){
    return(
        <button onClick={props.onClick} style={{height:`${props.height}`}}>{props.children}</button>
    );
}

export default MyButton