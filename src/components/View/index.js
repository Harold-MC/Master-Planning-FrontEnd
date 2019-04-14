import React from 'react'
import { Col, Row, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import Modal from './../Modal'
import './../Form/styles/styles.css'
import API from './../../Api'


export default class View extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            plan: {}
        }

        this.el = this.props.match.params.id

    }

    componentDidMount() {

        var plans = API.getItem("planifications");
        console.log(plans)
        this.setState({
            plan: plans[this.el]
        })

    }


    render() {

        return (
            <Form style={{ backgroundColor: "rgb(0,0,0,.2)", padding: 10, borderRadius: 30 }}>
                <Modal visible={this.state.visible} header={this.state.header} key="modal-register" message={this.state.message} />
                <FormGroup>
                    <Label>Nombre de la Planificacion</Label>
                    <Input disabled type="text" id="nameP" value={this.state.plan.name} />
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Grado</Label>
                            <Input disabled type="text" id="nameP" value={this.state.plan.grade} />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Fecha</Label>
                            <Input disabled type="text" id="nameP" value={this.state.plan.date} />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label>Competencias Fundamentales</Label>
                    <Input type="text" id="compF" value={this.state.plan.compF} disabled/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress">Competencias Especificas</Label>
                    <Input type="text" id="compF" value={this.state.plan.compE} disabled/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress2">SE</Label>
                    <Input type="text" id="compF" value={this.state.plan.se} disabled/>
                </FormGroup>

                <Table responsive>
                    <thead>
                        <tr>
                            <th>Indicadores</th>
                            <th>Contadores</th>
                            <th>Est</th>
                            <th>Evaluacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Input disabled id="indicators" type="textarea" value = {this.state.plan.indicators}/></td>
                            <td><Input disabled id="counters" type="textarea" value = {this.state.plan.counters}/></td>
                            <td><Input id="est" type="textarea" value = {this.state.plan.est} disabled/></td>
                            <td><Input id="evaluations" type="textarea" value = {this.state.plan.evaluations} disabled/></td>
                        </tr>
                    </tbody>
                </Table>
            </Form>
        )
    }
}