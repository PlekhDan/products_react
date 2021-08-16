import React, {Component} from "react";
import {Button, Form, Input, Message, Select} from "semantic-ui-react";


// const MyMessage = () => <div>123</div>
const MyMessage = () => (
    <div>
        <Message
            error
            header=''
            name='id'
            content='Такой идентификатор уже существует.'
        />
        <Message
            error
            header=''
            name='id'
            content='ошибка, нет группы товала.'
        />
    </div>

)

export class CreateProduct extends Component {

    state = {
        groups: this.props.data.groups,
        products: this.props.data.products,
        createProduct: {},
        warning: false,
        handleMessage: false
    }


    handleSubmit = (event) => {
        console.log('submit')

        const {products} = this.state;
        event.preventDefault();
        const newProduct = this.state.createProduct;
        console.log(newProduct);

        const prod = products.reduce((acc, count) => [...acc, count.id], []).some(el => el === newProduct.id);

        if (prod || !('group' in newProduct)) {
            this.setState({
                warning: true,
                handleMessage: true
            })
        }

        // if (newProduct.id < 0 || prod || newProduct.price <= 0 || newProduct.count <= 0 || !('group' in newProduct)) {
        //     console.log('ошибка!')
        //     this.setState({
        //         warning: (<Message negative>Какие-то ошибки</Message>)
        //     })
        // } else {
        //     console.log('отправляем');
        // }

        // if (newProduct.id < 0) {
        //     console.log('id меньше нуля');
        // } else if (prod) {
        //     console.log('id существует');
        // } else if (newProduct.price <= 0) {
        //     console.log('цена меньше нуля');
        // } else if (newProduct.count <= 0) {
        //     console.log('количество товара меньше нуля');
        // } else if (!('group' in newProduct)) {
        //     console.log('ошибка, нет группы товала');
        // } else {
        //     console.log('отправляем');
        // }
    }


    handleChange = (event, {name, value}) => {
        this.setState({
            createProduct: {...this.state.createProduct, [name]: value},
            warning: false,
            handleMessage: false
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
                                error={this.state.warning}
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
                                name='code'
                                label='Артикул:'
                                placeholder='code'
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
                                error={false}
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
                {this.state.handleMessage ? <MyMessage/> : null}
                {/*<Message*/}
                {/*    error*/}
                {/*    header=''*/}
                {/*    name='id'*/}
                {/*    content='Такой идентификатор уже существует.'*/}
                {/*/>*/}
                {/*<Message*/}
                {/*    error*/}
                {/*    header=''*/}
                {/*    name='group'*/}
                {/*    content='Добавьте группу товара.'*/}
                {/*/>*/}
                <Form.Field
                    control={Button}
                    content='Добавить'
                    type='submit'
                />
            </Form>
        );
    }
}