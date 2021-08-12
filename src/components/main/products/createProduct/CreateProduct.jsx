import React, {Component} from "react";
import {Button, Input, Select} from "semantic-ui-react";
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
        const { groups } = this.state;
        const selects = groups.map(group => ({
            key: group.groupId,
            value: group.name,
            text: group.name,
        }))
        return(
            <form name='create' onSubmit={this.handleSubmit}>
                <div>Идентификатор:</div>
                <Input name='id' type='number' required placeholder='id'/>
                <div>Название:</div>
                <Input name='name' type='text' required placeholder='name'/>
                <div>Артикул:</div>
                <Input name='code' type='text' required placeholder='code'/>
                <div>Группа товара:</div>
                <Select options={selects}/>
                <div>Цена:</div>
                <Input name='price' type='number' required placeholder='price'/>
                <div>Количество:</div>
                <Input name='count' type='number' required placeholder='count'/>
                <div/><Button>Добавить</Button>
            </form>
        );
    }
}