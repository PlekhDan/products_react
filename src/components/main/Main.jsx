import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {Products} from "./products/allProducts/Products";
import {CreateProduct} from "./products/createProduct/CreateProduct";
import s from './Main.module.css'


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
                <div className={s.outer}>
                    <Route exact path='/' render={() => <Products data={data} />} />
                    <Route path='/create' render={() => <CreateProduct data={data} createProduct={this.createProduct} />} />
                </div>
            </Switch>
        );
    }
}

export default Main;