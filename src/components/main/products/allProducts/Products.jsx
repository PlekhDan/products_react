import React, {Component} from "react";
import {Button, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ConfirmComponent from "../confirm/ConfirmComponent";


export class Products extends Component {


    state = {
        groups: this.props.data.groups,
        products: this.props.data.products,
    }

    removeRow = (id) => {
        const {products} = this.state;
        console.log(id);
        this.setState({
            products: products.filter(product => product['id'] !== id)
        })
    }

    render() {
        const {groups, products} = this.state;
        return (
            <div>
                <Table>
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
                            <Table.Row key={product.id} index={product.id}>
                                <Table.Cell>{product.code}</Table.Cell>
                                <Table.Cell>{product.name}</Table.Cell>
                                <Table.Cell>{groups.filter(group => group.groupId === product.groupId)[0]['name']}</Table.Cell>
                                <Table.Cell>{product.count} шт.</Table.Cell>
                                <Table.Cell>{product.price} руб.</Table.Cell>
                                <Table.Cell>{product.count * product.price} руб.</Table.Cell>
                                <Table.Cell>
                                    <ConfirmComponent removeRow={this.removeRow} index={product.id}/>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                <Link to='/create'>
                    <Button>Добавить</Button>
                </Link>
            </div>
        );
    }
}