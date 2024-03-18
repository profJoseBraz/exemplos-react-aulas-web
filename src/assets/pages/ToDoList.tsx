import { ChangeEvent, useState } from "react";
import "./ToDoList.css";
import MyMiniForm from "../components/MyMiniForm";
import MyItem from "../components/MyItem";
import MyTitle from "../components/MyTitle";

function Example1() {
    const [items, setItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState("");

    const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        // alert(e.target.value);
        setNewItem(e.target.value);
    }

    const handleFormSubmit = () => {
        // setItems([...items, "item " + items.length]);
        if(newItem.length > 0){
            setItems([...items, newItem]);
            setNewItem("");
        }else{
            alert("Não é possível adicionar um novo item sem descrição!");
        }
    };

    return (
        <div className="example-1">
            <MyMiniForm 
            onButtonClick={handleFormSubmit} 
            onInputChange={handleOnInputChange}
            inputValue={newItem.length > 0 ? newItem : ""} />

            <div className="items-container">
                {/* {items.length > 0 && ( */}
                    <div className="items">
                        <div className="title">
                            {/* <h1>Meus itens</h1> */}
                            <MyTitle>Meus itens</MyTitle>
                        </div>
                        {items.map((item, index) => (
                            <div className="item">
                                {/* <h1 key={index}>{item}</h1> */}
                                <MyItem key={index}>{item}</MyItem>
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
