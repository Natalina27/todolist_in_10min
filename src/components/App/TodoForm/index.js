import React from 'react';
import {Button, Form, Input} from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';

import s from './styles.module.css';

export const TodoForm = () => {
    return (
        <Form>
            <Input className={s.input}/>
            <Button>
                <PlusCircleOutlined />
            </Button>
        </Form>
    );
};

