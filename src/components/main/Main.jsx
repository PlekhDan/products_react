import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {ProductList} from "./ProductList";
import {NewProduct} from "./NewProduct";
import {Container} from "semantic-ui-react";


class Main extends Component {

    state = {
        data: this.props.data,
        products: this.props.data.products,
        newProduct: {}
    }


    createProduct = (newProduct) => {
        const { products } = this.state;
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
        products: [...products, newProduct]
    })
    }

    render() {
        const { data } = this.state;
        return(
            <Switch>
                <Container>
                    <Route exact path='/' render={() => <ProductList data={data} />} />
                    <Route path='/create' render={() => <NewProduct data={data} createProduct={this.createProduct} />} />
                </Container>
            </Switch>
        );
    }
}

export default Main;