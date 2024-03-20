import { ReactNode, useState } from "react";
import style from './MyItem.module.css'
import MyButton from "./MyButton";

interface Props{
    keyValue: number;
    
    isChecked: boolean;
    isRemoved: boolean;

    children: ReactNode;
    bgColorSelected?: string;

    onSelectItem: () => void;
    onCheckItem: () => void;
    onRemoveItem: () => void;
}

function MyItem(props: Props){
    return(
        <>
            <div className={props.isRemoved ? style.MyItemRemoved : style.MyItemContainer}>
                <div className={style.MyItem} style={{backgroundColor: `${props.bgColorSelected}`}}>
                    <div 
                    className={style.MyItemDescription} 
                    onClick={props.onSelectItem}>
                        <h1
                        className={props.isChecked ? style.MyItemChecked : style.MyItemUnchecked}  
                        key={props.keyValue}
                        >{props.children}</h1>
                    </div>
                    
                    <div className={style.MyItemButtons}>
                        <MyButton onClick={props.onCheckItem}>ok</MyButton>
                        <MyButton onClick={props.onRemoveItem}>rm</MyButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyItem