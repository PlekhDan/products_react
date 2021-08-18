import React, {Component} from "react";
import {Clock} from "./Clock";
import {Link} from "react-router-dom";
import {Icon, Segment, Header, Container} from "semantic-ui-react";


class PageHeader extends Component {

    render() {
        return (
            <Segment clearing>
                <Container>
                    <Header as='h3' floated='left'>
                        <Link to='/'>
                            <Icon name={"blind"} size="large"/>
                            Logo
                        </Link>
                    </Header>
                    <Header as='h3' floated='right'>
                        <Clock/>
                    </Header>
                </Container>
            </Segment>
        )
    }
}

export default PageHeader;