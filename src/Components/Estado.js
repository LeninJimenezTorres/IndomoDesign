import React, {Component} from "react";

export default class Estado extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador:100,
        }
        setInterval(()=>{
            this.setState(
                {contador:this.state.contador+1}
            );
        },1000)
    }
    render(){
        return(
            <div>
                <h3>El estado</h3>
                <p>{this.state.contador}</p>
            </div>
        )
    }
}