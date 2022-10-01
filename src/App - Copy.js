import './App.css';
import icon_contact from './Galery/icon-phone.png';
import Lottie from "lottie-react";
import React, {Component, useState, Suspense} from "react";
import logo_animation from "./Galery/logo.json";
import soundtrack from './Media/Everlasting_Dream_-_Ancient_art_of_magic.mp3';
import {Howl, Howler} from 'howler';
import ReactHowler from 'react-howler';
import Volumen from './Components/Volumen';
import ReenderizadoElementos from './Components/ReenderizadoElementos';
import Eventos from './Components/Eventos';
import { EventosES6, EventosES7 } from './Components/EventosES';
import * as THREE from 'three';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {ModelCello} from './Components/Sala/Cello';
import {ModelSalaParedes} from './Components/Sala/Salaparedes';
import {ModelSalaPiso} from './Components/Sala/Salapisob';
import {ModelCortinaSalaA} from './Components/Sala/Cortinasalaa';
import {ModelCortinaSalaB} from './Components/Sala/Cortinasalab';
import {ModelCortinaSalaC} from './Components/Sala/Cortinasalac';
import {ModelPortaCortinaSala} from './Components/Sala/Portacortinasala';
import {ModelAparadorSala} from './Components/Sala/Aparador';
import {ModelCuadroSala} from './Components/Sala/Cuadro';
import {ModelTVStand} from './Components/Sala/Tvstand';
import {ModelPuerta} from './Components/Sala/Puerta';
import {ModelMaceta} from './Components/Sala/Maceta';
import {ModelAlfombra} from './Components/Sala/Alfombra';
import {ModelLamparaGrande} from './Components/Sala/Lamparagrande';
import {ModelLampara} from './Components/Sala/Lampara';
import {ModelVela} from './Components/Sala/Vela';
import {ModelCojines} from './Components/Sala/Cojines';
import {ModelMuebles} from './Components/Sala/Muebles';
import {ModelTV} from './Components/Sala/Tv';
import {ModelBarredera} from './Components/Sala/Barrederas';
import {ModelMesita} from './Components/Sala/Mesita';
import {ModelEstatua} from './Components/Sala/Estatua';
import {ModelVentanasSala} from './Components/Sala/Ventanas';
import UseEffect from './Components/UseEffect';

function App() {
    const [sonido, setSonido] = useState('pause');
    const [repro, setRepro] = useState(false);
    const [aux, setAux] = useState(0);
    
    const conmutar = (src) => { 
        if (sonido=='play') {
            setSonido('pause');
            setRepro(false);
        }
        if (sonido=='pause'){
            setSonido('play');
            setRepro(true);
        }
    };

    const playInicial = ()=>{
        if (aux==0){
            setSonido('play');
            setRepro(true);
            setAux(100);
        }
    }
    /*
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    const controls = new OrbitControls( camera, renderer.domElement );
    
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    
    camera.position.z = 5;
    controls.update();
    
    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
        controls.update();
    }
    animate();
    */
    return (
        <div className="App" onClick={playInicial}>
            <ReactHowler
                src={soundtrack}
                playing={repro}
                loop = {true}
                html5 = {true}
                volume = {0.8}
                initialized = {true}
            />
            <nav className='menu_container'>
                <div className='logo'>
                    <span className='logo_letras'>INDOMO DESIGN</span>
                    <span className='logo_icono'>
                        <Lottie animationData={logo_animation} loop={true} />
                    </span>
                </div>
                <div className='menu'>
                    <span className='menu_logo'>MENU</span>
                    {/* <img src={icon_menu} className="menu_logo" alt="menu" /> */}
                    <ul id='menu' className='desplegable'>
                        <li className='lista'><a href='#' className='menu_link'>INTERIORISMO</a></li>
                        <li className='lista'><a href='#' className='menu_link'>ARQUITECTURA</a></li>
                    </ul>
                </div>
            </nav>
            <div className='sound' onClick={conmutar}>
                <Volumen icono={sonido}/>
            </div>
            <div className='contact'>
                <img src={icon_contact} className="contact_logo" alt="contact" />
            </div>
            <div className='frase'  onMouseOver={console.log('Moviendo....')}>
                ARQUITECTURA E INTERIORISMO <br/> ESTUDIO <br/>
            </div>
            <div>
                <UseEffect/>
            </div>


            {/* <Canvas className='canvas'>
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={0.1}></ambientLight>
                <directionalLight intensity={0.1} position={[-2,5,3]}></directionalLight>
                <Suspense fallback={null}>
                    <Box/>
                </Suspense>
            </Canvas> */}
            <div className='modelo'>
                <Canvas className='canvas'>
                    <OrbitControls enableZoom={true}/>
                    <ambientLight intensity={0.4}></ambientLight>
                    <directionalLight intensity={0.4} position={[-2,5,3]}></directionalLight>
                    <Suspense fallback={null}>
                        <ModelAparadorSala scale={[1.4,1.1,1.17]} position={[-1,0,-10.25]} rotation={[0,270,0]}/>
                        <ModelVela scale={[1,1.5,1.5]} position={[-1.5,-0.7,-8.7]} rotation={[0,270,0]}/>
                        <ModelVela scale={[1,1.5,1.5]} position={[-0.8,-0.7,-8.72]} rotation={[0,270,0]}/>
                        <ModelVela scale={[1,1.5,1.5]} position={[-1.3,-0.7,-8.75]} rotation={[0,270,0]}/>
                        <ModelVela scale={[1,1.5,1.5]} position={[-1,-0.7,-8.68]} rotation={[0,270,0]}/>
                        <ModelCuadroSala scale={[1.4,1.1,1.17]} position={[-1.05,0,-10.25]} rotation={[0,270,0]}/>
                        <ModelCojines scale={[1.4,1.1,1.17]} position={[-2.05,0,-10.25]} rotation={[0,270,0]}/>
                        <ModelMuebles scale={[1.4,1.1,1.17]} position={[-2.05,0,-10.25]} rotation={[0,270,0]}/>
                        <ModelBarredera scale={[1.8,1.2,1.2]} position={[0,0,-10]} rotation={[0,270,0]}/>
                        <ModelMesita scale={[1.4,1.1,1.17]} position={[-2.05,0,-10.25]} rotation={[0,270,0]}/>
                        <ModelEstatua scale={[1.4,1.1,1.17]} position={[-2.05,0,-10.25]} rotation={[0,270,0]}/>
                        <ModelMaceta scale={[1,1.5,1.5]} position={[0,0,-10]} rotation={[0,270,0]}/>
                        <ModelLamparaGrande scale={[1.5,1.5,1.5]} position={[-6,-0.2,-12.5]} rotation={[0,270,0]}/>
                        <ModelLamparaGrande scale={[1.5,1.5,1.5]} position={[2.5,-0.2,-20]} rotation={[0,270,0]}/>
                        <ModelLampara scale={[1,1.5,1.5]} position={[4,-0.5,-10.6]} rotation={[0,270,0]}/>
                        <ModelLampara scale={[1,1.5,1.5]} position={[3.1,-0.5,-4.9]} rotation={[0,270,0]}/>
                        <ModelAlfombra scale={[1.8,1.5,1.5]} position={[-1,0,-10]} rotation={[0,270,0]}/>
                        <ModelTV scale={[1,1.5,1.5]} position={[4,-0.5,-10.6]} rotation={[0,270,0]}/>
                        <ModelTVStand scale={[1,1,1.45]} position={[4,0,-10.6]} rotation={[0,270,0]}/>
                        <ModelPuerta scale={[1.8,1.2,1.2]} position={[0,0,-10]} rotation={[0,270,0]}/>
                        <ModelCello scale={[1,1,1]} position={[3.5,0,-9.5]} rotation={[0,270,0]}/>
                        <ModelSalaParedes scale={[1.8,1.2,1.2]} position={[0,0,-10]} rotation={[0,270,0]}/>
                        <ModelSalaPiso scale={[1.8,1.2,1.2]} position={[0,0,-10]} rotation={[0,270,0]}/>
                        <ModelVentanasSala scale={[1,1.28,7.4]} position={[0.25,-0.35,-35]} rotation={[0,270,0]}/>
                        <ModelCortinaSalaA scale={[1,1,1]} position={[-4.05,0.4,-10.2]} rotation={[0,270,0]}/>
                        <ModelCortinaSalaB scale={[1,1,1]} position={[-3.90,0.4,-10.8]} rotation={[0,270,0]}/>
                        <ModelCortinaSalaC scale={[1,1,1]} position={[-3.75,0.4,-11.4]} rotation={[0,270,0]}/>
                        <ModelPortaCortinaSala scale={[1.2,1,1.17]} position={[-2.95,0.72,-10.7]} rotation={[0,270,0]}/>
                        {/* <Iphone/> */}
                    </Suspense>
                </Canvas>
            </div>
            
            
            <div className='datos'>
                <ReenderizadoElementos/>
            </div>
            <div>
                <Eventos/>
            </div>
            <div>
                <EventosES6/>
            </div>
            <div>
                <EventosES7/>
            </div>
        </div>
    );
}

export default App;
