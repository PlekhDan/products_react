import React, {Component} from "react";
import {Button, Form } from "semantic-ui-react";


export class CreateProduct extends Component {

    state = {
        groups: this.props.data.groups,
        products: this.props.data.products,
        createProduct: {}
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.createProduct);

    }


    handleChange = (event, { name, value }) => {
        this.setState({
            createProduct: { ...this.state.createProduct, [name]: value }
        })
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
                    <Form.Input onChange={this.handleChange} name='id' label='Идентификатор:' type='number' required placeholder='id'/>
                    <Form.Input onChange={this.handleChange} name='name' label='Название товара:' type='text' required placeholder='name'/>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input onChange={this.handleChange} name='code' label='Артикул:' type='text' required placeholder='code'/>
                    <Form.Select onChange={this.handleChange} name='group' label='Группа товара:' required options={selects}/>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input onChange={this.handleChange} name='price' label='Цена:' type='number' required placeholder='price'/>
                    <Form.Input onChange={this.handleChange} name='count' label='Количество товара:' type='number' required placeholder='count'/>
                </Form.Group>
                    <Button type='submit'>Добавить</Button>
            </Form>
        );
    }
}