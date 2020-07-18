import React from 'react';
import clx from 'classnames';

import s from './styles.module.css';

export const TodoItem = ({
                  id, value, isDone, onClickDone, onClickDelete
              }) =>{
    return (
        <div className={s.wrap}>
            <checkbox
                checked={isDone}
                color="default"
                value="default"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                onClick={() => onClickDone(id)}
            />
            <span className={
                clx({
                    [s.item]: true,
                    [s.done]: isDone
                })
            }> {value} </span>

            <div
                className={s.btn}
                onClick={() => onClickDelete(id)}
            />

        </div>
    );
};
