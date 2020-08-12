import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';

import s from './App.module.css';

const initialState = [
    {
        id: uuid(),
        title: 'Task1',
        isDone: false
    }, {
        id: uuid(),
        title: 'Task2',
        isDone: false
    }, {
        id: uuid(),
        title: 'Task3',
        isDone: false
    }
];


export const App = () => {

    const [list, setList] = useState(initialState);

    const done = list.filter(el => el.isDone).length;
    const todo = list.length;

    return (
        <div className={s.app}>
            <div className={s.todo}>
                <h1 className={s.title}> MY TO-DO LIST</h1>
                <TodoForm />
                <TodoList />
                <Footer todo={todo} done={done} />
            </div>
        </div>
    );
};



