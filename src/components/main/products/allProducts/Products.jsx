import React, {Component} from "react";


export class Products extends Component {


    state = {
        groups: this.props.data.groups,
        products: this.props.data.products,
    }

    render() {
        const { groups, products } = this.state;
        console.log(groups)
        console.log(products)
        return(
            <div>123</div>
        );
    }
}