import React, {Component} from "react";
import {Button, Form, Input, Select} from "semantic-ui-react";

// import s from './CreateProduct.module.css'


export class CreateProduct extends Component {

    state = {
        groups: this.props.data.groups,
        products: this.props.data.products,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const id = event.target.id.value;
        const name = event.target.name.value;
        const code = event.target.code.value;
        const group = event.target.group.value;
        const price = event.target.price.value;
        const count = event.target.count.value;
        // console.log(group)
    }

    componentDidMount() {

    }

    render() {
        const {groups} = this.state;
        const selects = groups.map(group => ({
            key: group.groupId,
            value: group.name,
            text: group.name,
        }))
        return (
            <Form name='create' onSubmit={this.handleSubmit}>
                <Form.Group widths={2}>
                    <Form.Input label='Идентификатор:' type='number' required placeholder='id'/>
                    <Form.Input label='Название товара:' type='text' required placeholder='name'/>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input label='Артикул:' type='text' required placeholder='code'/>
                    <Form.Select label='Группа товара:' required options={selects}/>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input label='Цена:' type='number' required placeholder='price'/>
                    <Form.Input label='Количество товара:' type='number' required placeholder='count'/>
                </Form.Group>
                <Button type='submit' disabled>Добавить</Button>
            </Form>
        );
    }
}