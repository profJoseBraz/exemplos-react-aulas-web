import { ReactNode, useState } from "react";
import style from './MyItem.module.css'
import MyButton from "./MyButton";

interface Props{
    key: number;

    children: ReactNode;
    bgColorSelected?: string;

    onSelectItem: () => void;
    onCheckItem: () => void;
    onRemoveItem: () => void;
}

function MyItem(props: Props){
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckItem = () => {
        if(!isChecked){
            setIsChecked(true);
        }else{
            setIsChecked(false);
        }
    }

    return(
        <>
            <div className={style.MyItemContainer}>
                <div className={style.MyItem} style={{backgroundColor: `${props.bgColorSelected}`}}>
                    <div 
                    className={style.MyItemDescription} 
                    onClick={props.onSelectItem}>
                        <h1
                        className={isChecked ? style.MyItemChecked : style.MyItemUnchecked}  
                        key={props.key}
                        >{props.children}</h1>
                    </div>
                    
                    <div className={style.MyItemButtons}>
                        <MyButton onClick={handleCheckItem}>ok</MyButton>
                        <MyButton onClick={props.onRemoveItem}>rm</MyButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyItem