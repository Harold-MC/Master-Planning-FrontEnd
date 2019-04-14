import React from 'react'
import {Link} from 'react-router-dom'
import API from './../../Api'

const getPlanifications = () => {

    var plan = API.getItem("planifications");

    if(plan !== null && plan !== undefined){

        return plan;

    }
        return [{name : "No se han encontrados planificaciones."}]
    

}

export const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div style={{ margin: "auto" }} class="col-md-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            
                            <h3 className="panel-title"><Link to = "/PE"><i class="material-icons">note_add</i></Link>       Agregar PE</h3>
                        </div>
                        <div className="panel-body">
                           {getPlanifications().map((x,y) => {

                               return (
                                   <Link style = {{display : "block", fontSize : 24, backgroundColor : "rgba(0,0,0,.3)", marginBottom : 10, padding : 10}} to = {`view/${y}`}>{x.name}</Link>
                               )

                           })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
