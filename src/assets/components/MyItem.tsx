import { ReactNode } from "react";
import style from './MyItem.module.css'
import MyButton from "./MyButton";

interface Props{
    key: number;
    
    children: ReactNode;
}

function MyItem(props: Props){
    return(
        <>
            <div className={style.MyItem_container}>
                <div className={style.MyItem}>
                    <div className={style.MyItem_description}>
                        <h1  
                        key={props.key}
                        >{props.children}</h1>
                    </div>
                    
                    <div className={style.MyItem_buttons}>
                        <MyButton onClick={() => {}}>ok</MyButton>
                        <MyButton onClick={() => {}}>rm</MyButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyItem