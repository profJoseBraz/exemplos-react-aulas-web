import { ReactNode } from "react"
import style from './MyTitle.module.css'

interface Props{
    children: ReactNode
}

function MyTitle({children}: Props){
    return(
        <h1 
        className={style.MyTitle}
        >{children}</h1>
    )
}

export default MyTitle