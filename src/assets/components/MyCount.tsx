import { ReactNode } from "react";
import style from "./MyCount.module.css";

interface Props {
    children: ReactNode;
}

function MyCount({ children }: Props) {
    return <h1 className={style.MyCount}>{children}</h1>;
}

export default MyCount;
