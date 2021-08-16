import React, {Component} from "react";
import {Button, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ConfirmComponent from "../confirm/ConfirmComponent";


export class Products extends Component {


    state = {
        groups: this.props.data.groups,
        products: this.props.data.products,
    }

    createProduct = (createProduct) => {
        // this.setState({
        //     products: [...this.state.products, {
        //         id: "11",
        //         name: "name11",
        //         code: "A0110",
        //         groupId: "01",
        //         price: "111",
        //         count: "11"
        //     }]
        // })
        this.setState({
            products: [...this.state.products, createProduct]
        })
    }

    removeProduct = (id) => {
        const {products} = this.state;
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
                                    <ConfirmComponent removeProduct={this.removeProduct} index={product.id}/>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                <Link to='/create'>
                    <Button onClick={() => this.createProduct}>Добавить</Button>
                </Link>
            </div>
        );
    }
}