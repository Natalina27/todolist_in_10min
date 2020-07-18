import React from 'react';

import s from './styles.module.css';

export class InputItem extends React.Component {
    state =
        {
            label: 'Add new task here....',
            inputValue: '',
            error: false
        };

    onInputHandler = ({ items }) => {
        if (!(/^\w/.test(this.state.inputValue))) {
            this.setState({
                inputValue: '',
                error: true,
                label: 'Insert valid text'
            });
            return;
        }

        for (let i = 0; i < items.length; i += 1) {
            if (this.state.inputValue === items[i].value) {
                this.setState({
                    inputValue: '',
                    error: true,
                    label: 'This task already exists'
                });
                return;
            }
        }

        this.props.onClickAdd(this.state.inputValue);

        this.setState({ inputValue: '', label: 'Add new task here....' });
    };

    render() {
        const { onClickAdd, items } = this.props;

        return (
            <form className={s.input}
                  onSubmit={() => this.onInputHandler({ items, onClickAdd })}>
                <input
                    placeholder={this.state.label}
                    className={s.text}
                    value={this.state.inputValue}
                    onChange={event => this.setState(
                        {
                            inputValue: event.target.value.toUpperCase(),
                            error: false
                        }
                    )}

                />

                <button onClick={() => this.onInputHandler({ items, onClickAdd })}>
                    Add
                </button>
            </form>
        );
    }
}
