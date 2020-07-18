import React from 'react';
import clx from 'classnames';

import s from './styles.module.css';

export const TodoItem = ({id, value, isDone, handleClickDone, handleClickDelete}) =>{
    return (
        <div className={s.wrap}>
            <div className={s.item}>
                <input
                    type="checkbox"
                    className={s.checkbox}
                    checked={isDone}
                    onClick={() => handleClickDone(id)}
                />
                <span className={
                    clx({
                        [s.item]: true,
                        [s.done]: isDone
                    })
                }> {value} </span>
            </div>


            <div className={s.buttons}>
                <button
                    className={s.btn}
                    onClick={() => handleClickDelete(id)}
                > DELETE </button>

                <button
                    className={s.btn}
                    // onClick={() => handleClickEdit(id)}
                > EDIT </button>
            </div>

        </div>
    );
};
