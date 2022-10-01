import React, {Component} from "react";

export default class Eventos extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador:0,
        }
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e){
        console.log("SumaX");
        console.log(this);
        this.setState(
            {
                contador:this.state.contador+1,
            }
        );
    }
    restar(e){
        this.setState (
            {
                contador: this.state.contador-1
            }
        )
    }

    render() {
        return(
            <div>
                <h2>Eventos</h2>
                <div>
                    <h3>Contador: {this.state.contador}</h3>
                    <nav className="nave">
                        <button onClick={this.sumar}>+</button>
                        <button onClick={this.restar}>-</button>
                    </nav>
                </div>
            </div>
        )
    }

}