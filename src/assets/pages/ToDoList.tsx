import { ChangeEvent, useState } from "react";
import "./ToDoList.css";
import MyMiniForm from "../components/MyMiniForm";
import MyItem from "../components/MyItem";
import MyTitle from "../components/MyTitle";
import MyCount from "../components/MyCount";

function ToDoList() {
    const [items, setItems] = useState<string[]>([]);
    const [checkedItems, setCheckedItems] = useState<number[]>([]);
    const [removedItems, setRemovedItems] = useState<number[]>([]);
    const [newItem, setNewItem] = useState("");
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        // alert(e.target.value);
        setNewItem(e.target.value);
    };

    const handleFormSubmit = () => {
        // setItems([...items, "item " + items.length]);
        if (newItem.trim().length > 0) {
            setItems([...items, newItem]);
            setNewItem("");
        } else {
            alert("Não é possível adicionar um novo item sem descrição!");
            setNewItem("");
        }
    };

    return (
        <div className="to-do-list">
            <MyMiniForm
                onButtonClick={handleFormSubmit}
                onInputChange={handleOnInputChange}
                inputValue={newItem.length > 0 ? newItem : ""}
            />

            <div className="items-container">
                {/* {items.length > 0 && ( */}
                <div className="items">
                    <div className="title">
                        {/* <h1>Meus itens</h1> */}
                        <MyTitle>Meus itens</MyTitle>
                        {/* <h1>Itens adicionados: {items.length}</h1> */}
                        <MyCount>
                            Itens adicionados:{" "}
                            {items.length > 0 ? items.length : "Lista vazia"}
                        </MyCount>
                    </div>
                    {items.map((item, index) => (
                        <div key={index} className="item">
                            {/* <h1 key={index}>{item}</h1> */}
                            <MyItem
                                keyValue={index}
                                isChecked={checkedItems.includes(index) ? true : false}
                                isRemoved={removedItems.includes(index) ? true : false}
                                bgColorSelected={
                                    selectedItemIndex === index
                                        ? "rgb(207,114,62,1)"
                                        : ""
                                }
                                onSelectItem={() => {
                                    setSelectedItemIndex(index);
                                }}
                                onCheckItem={() => {
                                    if(checkedItems.includes(index)){
                                        const newCheckedItems = [...checkedItems];
                                        newCheckedItems.splice(checkedItems.indexOf(index), 1);
                                        setCheckedItems(newCheckedItems);   
                                    }else{
                                        setCheckedItems([...checkedItems, index])
                                    }
                                }}
                                onRemoveItem={() => {
                                    setRemovedItems([...removedItems, index]);

                                    setTimeout(() => {
                                        const newItems = [...items];
                                        newItems.splice(index, 1);
                                        setItems(newItems);

                                        const newCheckedItems = [...checkedItems];
                                        newCheckedItems.splice(checkedItems.indexOf(index), 1);
                                        setCheckedItems(newCheckedItems);

                                        const newRemovedItems = [...removedItems];
                                        newRemovedItems.splice(removedItems.indexOf(index), 1);
                                        setRemovedItems(newRemovedItems);
                                    }, 1000);
                                }}
                            >
                                {item}
                            </MyItem>
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

export default ToDoList;
