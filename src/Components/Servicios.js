import React, {Component} from "react";
import Lottie from "lottie-react";

import edificio from "../Galery/Animations/100989-white-cape-home.json"
import interior from "../Galery/Animations/103772-nice-interior-animation.json"
import diseno from "../Galery/Animations/36066-graphic-design.json"

import '../Styles/Servicios.css';

export default class Servicios extends Component {
    render(){
        return(
            <div className='areas'>
                <div className='tema'>
                    <h1>Nuestras áreas</h1>
                </div>
                <div className='design'>
                    <div className='contenido-design'>
                        <h2>Arquitectura</h2>
                        <ul>
                            <li>Planos arquitectónicos</li>
                            <li>Diseño urbanístico</li>
                            <li>Supervisión operativa</li>
                            <li>Elaboración de presupuestos</li>
                        </ul>
                    </div>
                    <div className='animacion-design'>
                        <Lottie animationData={edificio} loop={true} />
                    </div>
                </div>
                <div className='interiorismo'>
                    <div className='animacion-inter'>
                        <Lottie animationData={interior} loop={true} className="otro"/>
                    </div>
                    <div className='contenido-inter'>
                        <h2>Interiorismo</h2>
                        <ul>
                            <li>Remodelación de interiores</li>
                            <li>Diseño tematico</li>
                            <li>Domótica</li>
                            <li>Ambientación luminaria</li>
                        </ul>
                    </div>
                </div>
                <div className='design'>
                    <div className='contenido-design'>
                        <h2>Diseño virtual</h2>
                        <ul>
                            <li>Renders</li>
                            <li>Recorridos virtuales</li>
                            <li>Simulaciones arquitectónica</li>
                        </ul>
                    </div>
                    <div className='animacion-design'>
                        <Lottie animationData={diseno} loop={true} />
                    </div>
                </div>
            </div>
        )
    }
}


