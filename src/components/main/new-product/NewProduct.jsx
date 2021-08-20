import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {Button, Form, Input, Message, Select} from "semantic-ui-react";


const ErrorMessage = (errors) => errors.errors.map((error, index) => <Message error content={error} key={index} />);

export class NewProduct extends Component {

    savedProducts = JSON.parse(localStorage.getItem('products'))

    state = {
        groups: this.props.data.groups,
        products: this.savedProducts,
        newProduct: {},
        errorId: false,
        errorGroup: false,
        viewErrors: false,
        errors: [],
        redirect: false
    }

    handleSubmit = (event) => {
        const { groups, products, newProduct } = this.state;
        event.preventDefault();

        const prod = products.reduce((acc, count) => [...acc, count.id], []).some(el => el === newProduct.id);

        const errorId = 'Такой идентификатор уже существует.';
        const errorGroup = 'Ошибка, нет группы товара.';

        if (prod && !('group' in newProduct)) {
            this.setState({
                errorId: true,
                errorGroup: true,
                viewErrors: true,
                errors: [errorId, errorGroup]
            })
        } else if (prod) {
            this.setState({
                errorId: true,
                viewErrors: true,
                errors: [errorId]
            })
        } else if (!('group' in newProduct)) {
            this.setState({
                errorGroup: true,
                viewErrors: true,
                errors: [errorGroup]
            })
        } else {
            const elem = groups.find(el => el.name === newProduct.group)
            newProduct.groupId = elem.groupId
            delete newProduct.group
            const savedNewProduct = this.savedProducts.concat(newProduct)
            localStorage.setItem('products', JSON.stringify(savedNewProduct))
            this.setState({ redirect: true })
        }

    }


    handleChange = (event, {name, value}) => {
        const { newProduct } = this.state;
        this.setState({
            newProduct: {...newProduct, [name]: value},
            errorId: false,
            errorGroup: false,
            viewErrors: false,
            errors: []
        })
    }

    render() {
        const {groups, viewErrors, errors, errorGroup, errorId, redirect} = this.state;
        const selects = groups.map(group => ({
            key: group.groupId,
            value: group.name,
            text: group.name,
        }))

        if (redirect) {
            return <Redirect to="/" />
        }
        return (
            <Form error={true} onSubmit={this.handleSubmit}>
                <Form.Group widths={2}>
                    <Form.Field onChange={this.handleChange}
                                control={Input}
                                required={true}
                                name='id'
                                label='Идентификатор:'
                                placeholder='id'
                                type='number'
                                min='0.00'
                                error={errorId}
                    />
                    <Form.Field onChange={this.handleChange}
                                control={Input}
                                required={true}
                                name='name'
                                label='Название товара:'
                                placeholder='name'
                                error={false}
                    />
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Field onChange={this.handleChange}
                                control={Input}
                                required={true}
                                name='article'
                                label='Артикул:'
                                placeholder='article'
                                type='text'
                                error={false}
                    />
                    <Form.Field onChange={this.handleChange}
                                control={Select}
                                options={selects}
                                required={true}
                                name='group'
                                label='Группа товара:'
                                placeholder='group'
                                error={errorGroup}
                    />
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Field onChange={this.handleChange}
                                control={Input}
                                required={true}
                                name='price'
                                label='Цена:'
                                placeholder='price'
                                type='number'
                                min='0.00'
                                error={false}
                    />
                    <Form.Field onChange={this.handleChange}
                                control={Input}
                                required={true}
                                name='count'
                                label='Количество товара:'
                                placeholder='count'
                                type='number'
                                min='0.00'
                                error={false}
                    />

                </Form.Group>
                <Form.Field>{viewErrors && <ErrorMessage errors={errors}/>}</Form.Field>
                <Form.Field
                    control={Button}
                    content='Добавить'
                    type='submit'
                    color='blue'
                />
            </Form>
        );
    }
}