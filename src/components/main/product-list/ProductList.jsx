import React, {Component} from "react";
import {Button, Confirm, Icon, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";


export class ConfirmComponent extends Component {

    state = {
        open: false,
        removeProduct: false
    }

    show = () => this.setState({ open: true })

    handleCancel = () => {
        this.setState({ open: false })
    }

    handleConfirm = () => {
        const id = this.props.id;
        this.setState({
            open: false,
            removeProduct: this.props.removeProduct(id)
        })
    }

    render() {
        return (
            <div>
                <Icon onClick={this.show} name='trash alternate'/>
                <Confirm
                    open={this.state.open}
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                    size='mini'
                    header='Удалить товар'
                    content='Вы уверены?'
                    cancelButton='нет'
                    confirmButton='удалить'
                />
            </div>
        )
    }
}


export class ProductList extends Component {

    state = {
        groups: this.props.data.groups,
        products: this.props.data.products,
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
                                <Table.Cell>{product.article}</Table.Cell>
                                <Table.Cell>{product.name}</Table.Cell>
                                <Table.Cell>{groups.filter(group => group.groupId === product.groupId)[0]['name']}</Table.Cell>
                                <Table.Cell>{product.count} шт.</Table.Cell>
                                <Table.Cell>{product.price} руб.</Table.Cell>
                                <Table.Cell>{product.count * product.price} руб.</Table.Cell>
                                <Table.Cell>
                                    <ConfirmComponent removeProduct={this.removeProduct} id={product.id}/>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                <Link to='/create'>
                    <Button color='blue'>Добавить</Button>
                </Link>
            </div>
        );
    }
}