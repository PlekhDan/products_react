import React, { Component } from 'react'
import { Confirm, Icon } from 'semantic-ui-react'
import s from './ConfirmComponent.module.css'

class ConfirmComponent extends Component {

    state = {
        open: false,
        removeRow: false
    }

    show = () => this.setState({ open: true })

    handleCancel = () => {
        this.setState({ open: false })
    }

    handleConfirm = () => {
        const id = this.props.index;
        this.setState({ open: false, removeRow: this.props.removeRow(id) })
    }

    render() {
        return (
            <div>
                <Icon onClick={this.show} name='trash alternate'/>
                <Confirm
                    open={this.state.open}
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                    size='mini'
                    header='Удалить товар?'
                    cancelButton='no'
                    confirmButton='yes'
                />
            </div>
        )
    }
}

export default ConfirmComponent;