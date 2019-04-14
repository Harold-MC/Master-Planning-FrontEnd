import React, { Component } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default class DialogComponent extends Component {

    constructor() {
        super();
        this.state = { visible: false };
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick(event) {
        this.setState({ visible: true });
    }

    onHide(event) {
        this.setState({ visible: false });
    }

    componentWillReceiveProps({visible}) {

        this.setState({visible});
    }

    render() {

        const footer = (
            <div>
                <Button label="Yes" icon="pi pi-check" onClick={this.onHide} />
            </div>
        );

        return (
            <div>
                <div className="content-section implementation">
                    <Dialog header={this.props.header} visible={this.state.visible} style={{ width: '50vw' }} footer={footer} onHide={this.onHide} maximizable>
                        {this.props.message}
                    </Dialog>
                </div>
            </div>
        )
    }
}
