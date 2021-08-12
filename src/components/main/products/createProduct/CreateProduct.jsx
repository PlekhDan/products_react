import React, {Component} from "react";
import s from './CreateProduct.module.css'


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
        return(
            <form name='create' className={s.wrapper} onSubmit={this.handleSubmit}>
                <div>Идентификатор:</div>
                <input name='id' type='number' required placeholder='id'/>
                <div>Название:</div>
                <input name='name' type='text' required placeholder='name'/>
                <div>Артикул:</div>
                <input name='code' type='text' required placeholder='code'/>
                <div>Группа товара:</div>
                <select name='group' key={'group'}>
                    {groups.map(group => (
                        <option key={group.groupId}>{group.name}</option>
                    ))}
                </select>
                <div>Цена:</div>
                <input name='price' type='number' required placeholder='price'/>
                <div>Количество:</div>
                <input name='count' type='number' required placeholder='count'/>
                <div/><input className={s.btn} type='submit'/>
            </form>
        );
    }
}