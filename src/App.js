import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PageHeader from "./components/header/PageHeader";
import Data from './Data.json';
import './App.css';
import {ProductList} from "./components/main/product-list/ProductList";
import {NewProduct} from "./components/main/new-product/NewProduct";
import {Container} from "semantic-ui-react";


class App extends Component{

    state = {
        data: Data
    }

    render() {
        const { data } = this.state;
        return (
            <BrowserRouter>
                <PageHeader/>
                <Container>
                    <Switch>
                    <Route exact path='/' render={() => <ProductList data={data} />}/>
                    <Route path='/create' render={() => <NewProduct data={data} createProduct={this.createProduct} />}/>
                    </Switch>
                </Container>
            </BrowserRouter>

        );
    }


}

export default App;
