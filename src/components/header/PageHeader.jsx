import React, {Component} from "react";
import s from './Header.module.css';
import {Clock} from "./Clock";
import {Link} from "react-router-dom";
import {Icon, Segment, Header} from "semantic-ui-react";


class PageHeader extends Component {

    render() {
        return (
            <Segment>
                <Header floated='left'>
                    <Link to='/' className={s.link}><Icon name={"blind"} size="large"/>Logo</Link>
                </Header>
                <Header floated='right'>
                    <Clock/>
                </Header>
            </Segment>
        )
    }
}

export default PageHeader;