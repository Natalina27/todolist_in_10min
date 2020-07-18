import React, {useState} from 'react';
import { TodoList } from "./TodoList";
import {Footer} from "./TodoList/Footer";

import s from  './App.module.css';
import {InputItem} from "./TodoList/InputItem";


export function App() {

    const InitialState = {
        items: [
            {
                value: 'CREATE NEW APP',
                isDone: false,
                id: 1
            },
            {
                value: 'INSERT PROPS',
                isDone: false,
                id: 2
            },
            {
                value: 'DO ALL TASKS',
                isDone: false,
                id: 3
            }
        ]
    };

    const [itemsArr, setItemsArr] = useState(InitialState.items);
    const itemId = InitialState.items.length;


    const onClickDone = (id) => {
        const newItemList = itemsArr.map(item => {
            const newItem = { ...item };
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        setItemsArr(newItemList);
    };

    const onClickDelete = (id) => {
        const newItemList = itemsArr.filter(item => item.id !== id);
        setItemsArr(newItemList);
    };

    const onClickAdd = (value) => {
        setItemsArr(
            [...itemsArr,
                {
                    value,
                    isDone: false,
                    id: itemId + 1
                }
            ]
        );
    };

    const itemsDone = itemsArr.filter((el) => el.isDone).length;
    const itemsTodo = itemsArr.length - itemsDone;

    return (
            <div className={s.wrap}>
                <h1 className={s.title}> TO-DO LIST:</h1>
                <InputItem
                    items={itemsArr}
                    onClickAdd={onClickAdd}
                />
                <div>
                    <TodoList
                        items={itemsArr}
                        onClickDone={onClickDone}
                        onClickDelete={onClickDelete}
                    />
                </div>
                <Footer
                    itemsTodo={itemsTodo}
                    itemsDone={itemsDone}
                />
            </div>
    );
}


