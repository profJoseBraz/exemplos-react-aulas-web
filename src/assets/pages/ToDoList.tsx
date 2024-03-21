import { ChangeEvent, useState } from "react";
import "./ToDoList.css";
import MyMiniForm from "../components/MyMiniForm";
import MyItem from "../components/MyItem";
import MyTitle from "../components/MyTitle";
import MyCount from "../components/MyCount";

function ToDoList() {
    
    // UseState que atualizará a lista de itens
    const [items, setItems] = useState<string[]>([]);

    // UseState que atualizará a lista de itens checados
    const [checkedItems, setCheckedItems] = useState<number[]>([]); 
    
    // UseState que atualizará a lista de itens removidos
    const [removedItems, setRemovedItems] = useState<number[]>([]); 
    
    // UseState que atualizará o valor do novo item
    const [newItem, setNewItem] = useState(""); 
    
    // UseState que atualizará o valor referente ao índice do item selecionado
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1); 
    
    // UseState bolano que verificará se um item está sendo removido
    const [isRemoving, setIsRemoving] = useState(false); 
    
    // UseState boleano que verificará se uma mensagem está sendo mostrada. Deverá ser true enquanto a mensagem estiver sendo renderizada
    const [isMessageShowing, setIsMessageShowing] = useState(false);  
    
    // UseState que servirá para guardar a referência ao TimeOut da mensagem de exclusão
    const [timerId, setTimerId] = useState(0);

    //Manipulador do evento de OnChange do Input refererente ao novo item
    const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        // alert(e.target.value);
        setNewItem(e.target.value);
    };

    //Manipuador do evento de clique no botão do componente MyMiniForm 
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
    
    const handleOnSelectItem = (index : number) => {
        if (selectedItemIndex === index) {
            setSelectedItemIndex(-1);
        } else {
            setSelectedItemIndex(index);
        }
    }

    const handleOnCheckItem = (index : number) => {
        if (checkedItems.includes(index)) {
            const newCheckedItems = [
                ...checkedItems,
            ];
            newCheckedItems.splice(
                checkedItems.indexOf(index),
                1
            );
            setCheckedItems(newCheckedItems);
        } else {
            setCheckedItems([
                ...checkedItems,
                index,
            ]);
        }
    }

    // Manipulador do evento de exclusao com animação
    const handleOnRemoveItem = (index : number) => {
        clearTimeout(timerId)
        if (!isRemoving) {
            setIsRemoving(true);

            setRemovedItems([
                ...removedItems,
                index,
            ]);

            setTimeout(() => {
                const newItems = [...items];
                newItems.splice(index, 1);
                setItems(newItems);

                const newCheckedItems = [
                    ...checkedItems,
                ];
                newCheckedItems.splice(
                    checkedItems.indexOf(index),
                    1
                );
                setCheckedItems(newCheckedItems);

                const newRemovedItems = [
                    ...removedItems,
                ];
                newRemovedItems.splice(
                    removedItems.indexOf(index),
                    1
                );
                setRemovedItems(newRemovedItems);

                setIsRemoving(false);

                setIsMessageShowing(true);

                setTimerId(setTimeout(() => {
                    setIsMessageShowing(false);
                }, 2000))
            }, 950);
        }
    }

    // Manipulador do evento de exclusão de itens (usar com os alunos)
    const handleOnRemoveItemSimple = (index : number) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

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
                                isChecked={
                                    checkedItems.includes(index) ? true : false
                                }
                                toRemove={
                                    removedItems.includes(index) ? true : false
                                }
                                bgColorSelected={
                                    selectedItemIndex === index
                                        ? "rgb(207,114,62,1)"
                                        : ""
                                }
                                onSelectItem={() => {
                                    handleOnSelectItem(index)
                                }}
                                onCheckItem={() => {
                                    handleOnCheckItem(index)
                                }}
                                onRemoveItem={() => {
                                    handleOnRemoveItem(index)
                                    // handleOnRemoveItemSimple(index);
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

            <div
                className={
                    isMessageShowing
                        ? "message message-in"
                        : "message message-out"
                }
            >
                <h1>Item exluído com sucesso</h1>
            </div>
        </div>
    );
}

export default ToDoList;
