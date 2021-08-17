import React, {Component} from "react";
import {Button, Form, Input, Message, Select} from "semantic-ui-react";


const MyMessage = (errors) => errors.errors.map(error => <Message error content={error} key={error} />);

export class NewProduct extends Component {

    state = {
        groups: this.props.data.groups,
        products: this.props.data.products,
        newProduct: {},
        warningId: false,
        warningGroup: false,
        viewErrors: false,
        errors: []
    }

    handleSubmit = (event) => {
        const { products, newProduct } = this.state;
        event.preventDefault();
        console.log(newProduct);

        const prod = products.reduce((acc, count) => [...acc, count.id], []).some(el => el === newProduct.id);

        const errorId = 'Такой идентификатор уже существует.';
        const errorGroup = 'Ошибка, нет группы товара.';

        if (prod && !('group' in newProduct)) {
            this.setState({
                warningId: true,
                warningGroup: true,
                viewErrors: true,
                errors: [errorId, errorGroup]
            })
        } else if (prod) {
            this.setState({
                warningId: true,
                viewErrors: true,
                errors: [errorId]
            })
        } else if (!('group' in newProduct)) {
            this.setState({
                warningGroup: true,
                viewErrors: true,
                errors: [errorGroup]
            })
        } else {
            console.log('отправляем и перенаправляем на другую страницу');
        }

    }


    handleChange = (event, {name, value}) => {
        const { newProduct } = this.state;
        this.setState({
            newProduct: {...newProduct, [name]: value},
            warningId: false,
            warningGroup: false,
            viewErrors: false,
            errors: []
        })
    }

    componentDidMount() {

    }

    render() {
        const {groups, viewErrors, errors, warningGroup, warningId} = this.state;
        const selects = groups.map(group => ({
            key: group.groupId,
            value: group.name,
            text: group.name,
        }))
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
                                error={warningId}
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
                                error={warningGroup}
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
                <Form.Field>{viewErrors && <MyMessage errors={errors}/>}</Form.Field>
                <Form.Field
                    control={Button}
                    content='Добавить'
                    type='submit'
                />

            </Form>
        );
    }
}