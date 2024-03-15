import { useState } from "react";
// import MyInput from "../components/MyInput";
// import MyButton from "../components/MyButton";
import "./Example1.css";
import MyMiniForm from "../components/MyMiniForm";

function Example1() {
    const [items, setItems] = useState<string[]>([]);

    const handleFormSubmit = () => {
        setItems([...items, "item " + items.length]);
    };

    return (
        <div className="example-1">
            <MyMiniForm onSubmit={handleFormSubmit}/>

            <div className="items-container">
                {/* {items.length > 0 && ( */}
                    <div className="items">
                        <div className="title">
                            <h1>Meus itens</h1>
                        </div>
                        {items.map((items, index) => (
                            <div className="item">
                                <h1 key={index}>{items}</h1>
                            </div>
                        ))}
                    </div>
                {/* )} */}
            </div>

            <div className="footer">
                <p>Meu primeiro componente React</p>
            </div>
        </div>
    );
}

export default Example1;
