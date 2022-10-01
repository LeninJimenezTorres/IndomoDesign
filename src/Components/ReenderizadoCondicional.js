import React,{Component} from "react";

function Login () {
    return(
        <div>
            <h4>Login</h4>
        </div>
    )
}
function Logout () {
    return(
        <div>
            <h4>Logout</h4>
        </div>
    )
}


export default class ReenderizadoCondicional  extends Component {
    constructor(props){
        super(props);
        this.state={
            session:true,
        };
    }
    render() {
        return(
            <div>
                <h2>Reenderizado Condicional</h2>
                {this.state.session?<Login/>:<Logout/>}                
            </div>
        )
    }
}