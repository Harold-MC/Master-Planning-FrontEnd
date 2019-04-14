import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import API from './../../Api'
import Modal from './../Modal'
import './styles/styles.css'

export default class FormComponent extends React.Component {

    state = {
        header: null,
        message: null
    }

    addPlanification = (e) => {

        var grade = document.getElementById("grade").value;
        var name = document.getElementById("nameP").value;
        var date = document.getElementById("date").value;
        var compF = document.getElementById("compF").value;
        var compE = document.getElementById("compE").value;
        var se = document.getElementById("SE").value;

        var indicators = document.getElementById("indicators").value;
        var counters = document.getElementById("counters").value;
        var est = document.getElementById("est").value;
        var evaluations = document.getElementById("evaluations").value;

        API.setInAllPlanifications({ grade, date, compE, compF, se, indicators, counters, est, evaluations, name });

        this.setState({
            header: "Planificaion Creada",
            message: "Usted ha creado exitosamente la planificacion " + name,
            visible: true
        })
    }

    print = () => {
        window.print();
    }

    close = () => {
        window.location.href = "/home"
    }

    render() {
        return (
            <Form style={{ backgroundColor: "rgb(0,0,0,.2)", padding: 10, borderRadius: 30 }}>
                <Modal visible={this.state.visible} header={this.state.header} key="modal-register" message={this.state.message} /> 
                <FormGroup>
                    <Label>Nombre de la Planificacion</Label>
                    <Input type="text" id="nameP" />
                </FormGroup> 
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleSelect">Grado</Label>
                            <Input type="select" id="grade">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">Fecha</Label>
                            <Input type="date" name="date" id="date" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label>Competencias Fundamentales</Label>
                    <Input type="text" id="compF" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress">Competencias Especificas</Label>
                    <Input type="text" id="compE" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress2">SE</Label>
                    <Input id="SE" type="text" />
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
                            <td><Input id="indicators" type="textarea" /></td>
                            <td><Input id="counters" type="textarea" /></td>
                            <td><Input id="est" type="textarea" /></td>
                            <td><Input id="evaluations" type="textarea" /></td>
                        </tr>
                    </tbody>
                </Table>
                <Button onClick={this.addPlanification.bind(this)} style={{ marginRight: "2%", marginLeft: "5%" }}><i class="material-icons">save</i>Guardar</Button>
                <Button onClick={this.print.bind(this)} style={{ marginRight: "2%" }}><i class="material-icons">print</i>Printear</Button>
                <Button onClick={this.close.bind(this)} style={{ marginRight: "2%" }}><i class="material-icons">close</i>Salir</Button>
            </Form>
        );
    }
}