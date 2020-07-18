import React, {useState} from 'react';
import {TodoList} from "./TodoList";
import {Footer} from "./TodoList/Footer";

import s from './App.module.css';
import {InputItem} from "./TodoList/InputItem";


export function App() {

    const InitialState = {
        items: [
            {
                value: 'WAKE UP AT 5.30',
                isDone: false,
                id: 1
            },
            {
                value: 'DRINK 2 GLASSES OF WATER',
                isDone: false,
                id: 2
            },
            {
                value: 'TAKE A BREAKFAST',
                isDone: false,
                id: 3
            }
        ]
    };

    const [itemsArr, setItemsArr] = useState(InitialState.items);
    const itemId = InitialState.items.length;


    const handleClickDone = (id) => {
        const newItemList = itemsArr.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        setItemsArr(newItemList);
    };

    const handleClickDelete = (id) => {
        const newItemList = itemsArr.filter(item => item.id !== id);
        setItemsArr(newItemList);
    };

    const handleClickAdd = (value) => {
        setItemsArr(
            [...itemsArr, {
                    value,
                    isDone: false,
                    id: itemId + 1
                }]
        )
    };

    const itemsDone = itemsArr.filter((el) => el.isDone).length;
    const itemsTodo = itemsArr.length - itemsDone;

    return (
        <div className={s.wrap}>
            <h1 className={s.title}> TO-DO LIST:</h1>
            <InputItem
                items={itemsArr}
                onClickAdd={handleClickAdd}
            />
            <div>
                <TodoList
                    items={itemsArr}
                    onClickDone={handleClickDone}
                    onClickDelete={handleClickDelete}
                />
            </div>
            <Footer
                itemsTodo={itemsTodo}
                itemsDone={itemsDone}
            />
        </div>
    );
}


