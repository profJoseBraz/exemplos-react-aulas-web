import { ReactNode } from "react";
import style from "./MyButton.module.css";

interface Props {
    children: ReactNode;
    height?: string;
    width?: string;
    bgColor?: string;
    onClick: () => void;
}

function MyButton(props: Props) {
    return (
        <button
            className={style.MyButton}
            onClick={props.onClick}
            style={{
                width: `${props.width}`,
                height: `${props.height}`,
                backgroundColor: `${props.bgColor}`,
            }}
        >
            {props.children}
        </button>
    );
}

export default MyButton;
