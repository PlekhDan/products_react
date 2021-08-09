import React, {Component} from "react";
import s from './Menu.module.css';


class Menu extends Component {

    render() {
        return (
            <div className={s.outer}>
                <div>Logo</div>
                <div>Clock</div>
            </div>
        );
    }
}

export default Menu;