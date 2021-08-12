import React, {Component} from "react";
import s from './Header.module.css';
import {Clock} from "./Clock";
import {Link} from "react-router-dom";


class Header extends Component {

    render() {
        return (
            <header className={s.outer}>
                <Link to='/' className={s.link}>Logo</Link>
                <Clock />
            </header>
        );
    }
}

export default Header;