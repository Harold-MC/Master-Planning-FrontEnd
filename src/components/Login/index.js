import React, { Component } from 'react'
import './css/styles.css'
import { Link } from 'react-router-dom'
import API from './../../Api'
import Modal from './../Modal'
import img from './../../assets/images/backgroundLogin.png'
import Api from './../../Api';

export class Login extends Component {

    state = {
        header: null,
        message: null
    }

    componentDidMount() {

        if (API.getItem("currentUser") !== null) {
            window.location.href = "/home"
        }
    }

    signIn = () => {

        if (this.id.value === "" || this.password.value === "") {
            this.setState({
                header: "oooops!",
                message: "Asegurate de llenar todos los campos.",
                visible: true
            })
        } else {
           if(API.getItem("Allusers") != null){
            var user = API.getItem("Allusers")
            var current = user.find((value) => {
                return value.id === this.id.value && value.password === this.password.value;
            })

            if (current === undefined) {
                this.setState({
                    header: "Credenciales Invalidas",
                    message: "Este usuario no esta registrado.",
                    visible: true
                })
            } else {
                Api.setCurrentUser({ name: `${current.name} ${current.lastname}`, id: current.id });
                window.location.href = '/home'
            }
           }else{
            this.setState({
                header: "Credenciales Invalidas",
                message: "Este usuario no esta registrado.",
                visible: true
            })
           }
        }


    }

    render() {
        return [<Modal visible={this.state.visible} header={this.state.header} key="modal-register" message={this.state.message} />,
        <div key="component-register" className="login-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 m-auto col-sm-8 col-12">
                        <div className="log-box">
                            <div className="row">
                                <div className="col-xl-5 col-sm-5 col-12 pad-right-0">
                                    <div className="logo-back">
                                        <img style={{ height: "100%", width: "100%" }} src={img} alt="img-login" />

                                    </div>
                                </div>
                                <div className="col-xl-7 col-sm-7 col-12 pad-left-0">
                                    <div className="log-content">
                                        <h1>Log In</h1>
                                        <div className="log-body">
                                            <div className="form-group myr-top">
                                                <label>Cedula</label>
                                                <input ref={(elem) => { this.id = elem }} type="number" className="form-control custom" placeholder="Ingresa tu cedula" />
                                            </div>
                                            <div className="form-group myr-top">
                                                <label>Contrasena</label>
                                                <input ref={(elem) => { this.password = elem }} type="password" className="form-control custom" placeholder="Ingresa tu contraseña" />
                                            </div>
                                            <div className="log-btn text-center">
                                                <button ref={(elem) => { this.btn = elem }} onClick={() => { this.signIn() }} className="btn btn-theme1">Log In</button>
                                            </div>
                                            <div className="log-bottom-cotent">
                                                <p>
                                                    <Link to="/register">Registrarme</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ]
    }
}