import React from 'react';

import s from './styles.module.css';

export const Footer = ({ itemsTodo, itemsDone }) => (
    <div className={s.wrap}>
        <div className={s.text}>
            <span> Task to do  : {itemsTodo} </span>
            <span> Done : {itemsDone} </span>
        </div>
    </div>
);
