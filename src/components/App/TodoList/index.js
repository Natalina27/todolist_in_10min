import React from 'react';

import s from './styles.module.css';
import {TodoItem} from "./TodoItem";

export const TodoList = ({ items, handleClickDone, handleClickDelete }) =>{
    return (
        <div className={s.wrap}>
            {items.map(item =>
                <TodoItem
                key={item.id}
                value={item.value}
                isDone={item.isDone}
                id={item.id}
                onClickDone={handleClickDone}
                onClickDelete={handleClickDelete}
            />)}
        </div>
    );
};

