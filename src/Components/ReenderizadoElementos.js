import React, {Component} from "react";
import datos from "../Helpers/datos.json";

function ElementoLista(props) {
    return(
        <a href={props.el.url} target="_blank">{props.el.name}</a>
    )
}

export default class ReenderizadoElementos extends Component{
    render(){
        console.log(datos);
        return(
            <div>
                <h1>Reenderizado de elementos</h1>
                <ul className="datos">{
                        datos.cel.map(el=>(
                            //Directo
                            // <li key={el.id}><a href={el.url} target="_blank">{el.name}</a></li>
                            
                            //Con un componente funcional
                            <li key={el.id}><ElementoLista el={el}/></li>
                        )
                        )
                    }
                </ul>
            </div>
        )
    }
}