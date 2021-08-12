import React, {Component} from "react";
import {Button, Icon, Table} from "semantic-ui-react";
// import s from './Products.module.css';
import del from './delete.svg';
import {Link} from "react-router-dom";
import ConfirmExampleConfirm, {Confirm} from "../confirm/ConfirmComponent";


export class Products extends Component {


    state = {
        groups: this.props.data.groups,
        products: this.props.data.products,
        ConfirmComponent: '',
    }

    open = () => this.setState({ confirm: true });
    close = () => this.setState({ confirm: false });

    removeRow = (event, id) => {
        const {products} = this.state;
        event.preventDefault();
        console.log(12)
        // this.setState({
        //     products: products.filter(product => product['id'] !== id)
        // })
        this.setState({
            ConfirmComponent: <ConfirmExampleConfirm/>
        })
    }

    // componentDidMount() {
    //
    // }

    render() {
        const {groups, products} = this.state;
        // console.log(products)
        // const groupName = groups.filter(group => products.every(key => group[key] === products[key]));
        // console.log(groups.filter(group => group['groupId'] === '01'))
        //products.filter(product => keys.every(key => product[key] === t/his.savedFilters[key]));
        // console.log(groups.filter(group => products.every(groupId => group[groupId] === products[0][groupId])))
        return (
            <div>
                {/*<Table className={s.table}>*/}
                <Table>
                    {/*<Table.Header className={s.head}>*/}
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Артикул</Table.HeaderCell>
                            <Table.HeaderCell>Название</Table.HeaderCell>
                            <Table.HeaderCell>Группа товара</Table.HeaderCell>
                            <Table.HeaderCell>Количество</Table.HeaderCell>
                            <Table.HeaderCell>Цена за шт.</Table.HeaderCell>
                            <Table.HeaderCell>Сумма</Table.HeaderCell>
                            <Table.HeaderCell>Удалить</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {products.map(product => (
                            // <Table.Row key={product.id} className={s.body}>
                            <Table.Row key={product.id}>
                                <Table.Cell>{product.code}</Table.Cell>
                                <Table.Cell>{product.name}</Table.Cell>
                                {/*<Table.Cell>{product.groupId}</Table.Cell>*/}
                                <Table.Cell>{groups.filter(group => group.groupId === product.groupId)[0]['name']}</Table.Cell>
                                <Table.Cell>{product.count} шт.</Table.Cell>
                                <Table.Cell>{product.price} руб.</Table.Cell>
                                <Table.Cell>{product.count * product.price} руб.</Table.Cell>
                                <Table.Cell>
                                    {/*<Button onClick={(event) => {*/}
                                    {/*    this.removeRow(event, product.id)*/}
                                    {/*}} className={s.del}>delete</Button>*/}
                                    {/*<Button onClick={this.open} className={s.del}>delete</Button>*/}
                                    {/*<Confirm open={this.state.open}*/}
                                    {/*         onCancel={this.close}*/}
                                    {/*         onConfirm={this.close}*/}
                                    {/*         content='123?'>123</Confirm>*/}
                                    <ConfirmExampleConfirm/>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                <Link to='/create'>
                    <Button>Добавить</Button>
                    {/*<Button className={s.btn}>Добавить</Button>*/}
                </Link>
            </div>
        );
    }
}