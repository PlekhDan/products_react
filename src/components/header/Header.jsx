import React, {Component} from "react";
import s from './Header.module.css';
import {Clock} from "./Clock";
import {Link} from "react-router-dom";
import {Icon} from "semantic-ui-react";


class Header extends Component {

    render() {
        return (
            <header className={s.outer}>
                <Link to='/' className={s.link}><Icon name={"blind"} size="large"/>Logo</Link>
                <Clock/>
            </header>
        );
    }
}

export default Header;