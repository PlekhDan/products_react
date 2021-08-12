import React, { Component } from 'react'
import {Button, Confirm, Icon} from 'semantic-ui-react'
import s from './ConfirmComponent.module.css'

class ConfirmComponent extends Component {
    state = { open: false }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {
        return (
            <div>
                {/*<Button onClick={this.open}><Icon name='times'/></Button>*/}
                <Icon onClick={this.open} name='trash alternate'/>
                <Confirm
                    open={this.state.open}
                    onCancel={this.close}
                    onConfirm={this.close}
                    // className={s.wrap}
                    size='small'
                />
            </div>
        )
    }
}

export default ConfirmComponent;