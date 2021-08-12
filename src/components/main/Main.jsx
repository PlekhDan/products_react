import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {Products} from "./products/allProducts/Products";
import {CreateProduct} from "./products/createProduct/CreateProduct";
import s from './Main.module.css'


class Main extends Component {

    state = {
        data: this.props.data
    }

    render() {
        const { data } = this.state;
        return(
            <Switch>
                <div className={s.outer}>
                    <Route exact path='/' render={() => <Products data={data} />} />
                    <Route path='/create' render={() => <CreateProduct data={data} />} />
                </div>
            </Switch>
        );
    }
}

export default Main;