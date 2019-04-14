import React, { Component } from 'react'
import './../Login/css/styles.css'
import { Link } from 'react-router-dom'
import API from './../../Api'
import Modal from './../Modal'
import img from './../../assets/images/backgroundRegister.png'



export class Register extends Component {

    state = {
        header: null,
        message: null
    }

    signUp = () => {

        if (this.name.value === "" || this.lastname.value === "" || this.identification.value === "" || this.password.value === "" || this.repeatPassword.value === "") {
            this.setState({
                header: "oooops!",
                message: "Hay campos que requieren ser completados",
                visible: true
            })
        } else if (this.password.value !== this.repeatPassword.value) {

            this.setState({
                header: "ooops!",
                message: "Las contrasenas ingresadas no coinciden",
                visible: true
            })
        }

        else{

            API.setInAllUsers({name : this.name.value, lastname : this.lastname.value,id : this.identification.value, password : this.password.value })
            this.setState({
                header: "Usuario Creado",
                message: "Usted ha sido registrado exitosamente! Sera Redireccionado Automaticamente",
                visible: true
            })

            setTimeout(() => {window.location.href = "/"},3000)
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
                                    <img style = {{height : "60%", width : "100%", marginTop : "50%", marginLeft : "5%"}} src = {img} alt = "img-login" />

                                    </div>
                                </div>
                                <div className="col-xl-7 col-sm-7 col-12 pad-left-0">
                                    <div className="log-content">
                                        <h1>Sign Up </h1>
                                        <div className="log-body">
                                            <div className="form-group myr-top">
                                                <label>Nombre</label>
                                                <input ref={(elem) => { this.name = elem }} type="text" className="form-control custom" placeholder="Nombre" />
                                            </div>
                                            <div className="form-group myr-top">
                                                <label>Apellidos</label>
                                                <input ref={(elem) => { this.lastname = elem }} type="text" className="form-control custom" placeholder="Apellidos" />
                                            </div>
                                            <div className="form-group myr-top">
                                                <label>Cedula</label>
                                                <input ref={(elem) => { this.identification = elem }} type="number" className="form-control custom" placeholder="Cedula" max="11" required />
                                            </div>
                                            <div className="form-group myr-top">
                                                <label>Contraseña</label>
                                                <input ref={(elem) => { this.password = elem }} type="password" className="form-control custom" placeholder="Contraseña" />
                                            </div>
                                            <div className="form-group myr-top">
                                                <label>REpita Contraseña</label>
                                                <input ref={(elem) => { this.repeatPassword = elem }} type="password" className="form-control custom" placeholder="Repita Contraseña" />
                                            </div>
                                            <div className="log-btn text-center">
                                                <button ref={(elem) => { this.btn = elem }} onClick={() => { this.signUp() }} className="btn btn-theme1">Registrarme</button>
                                            </div>
                                            <div className="log-bottom-cotent">
                                                <p>
                                                    <Link to="/">Ingresar al Sistema</Link>
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