import React, {Component} from "react";
import icon_sound_play from '../Galery/volume.png';
import icon_sound_mute from '../Galery/volume-mute.png';

function SounOn(){
    return (
        <div>
            {/* <h4>Play</h4> */}
            <img src={icon_sound_play} className="sound_logo" alt="sound"/>
        </div>
    )
}

function SounOff(){
    return (
        <div>
            {/* <h4>Mute</h4> */}
            <img src={icon_sound_mute} className="sound_logo" alt="sound"/>
        </div>
    )
}

export default class Volumen extends Component{
    render(){
        return(
            <div>
                {this.props.icono=="play"?SounOn():SounOff()}
            </div>
        )
    }
}