import './App.css';
import icon_contact from './Galery/icon-phone.png';
import Lottie from "lottie-react";
import React, {useState, useEffect} from "react";
import logo_animation from "./Galery/logo.json";
import soundtrack from './Media/Everlasting_Dream_-_Ancient_art_of_magic.mp3';
//import {Howl, Howler} from 'howler';
import ReactHowler from 'react-howler';
import Volumen from './Components/Volumen';
//import ReenderizadoElementos from './Components/ReenderizadoElementos';
//import Eventos from './Components/Eventos';
//import { EventosES6, EventosES7 } from './Components/EventosES';

import Modelos from './Components/Modelos.js';
//import Servicios from './Components/Servicios';
//import Departamentos from './Components/Departamentos.js';
//import Edificios from './Components/Edificios';
import video_arquitectura from  './Galery/Renders/areas/arquitectura.mp4';
import video_interior from  './Galery/Renders/areas/interiorismo.mp4';
import Contactos from './Components/Contactos';
import Interiorismo from './Components/Interiorismo';




function App() {

    const [interiorshow, setInteriorshow] = useState('hidden');
    const [contactshow, setContactshow] = useState('hidden');
    const [sonido, setSonido] = useState('pause');
    const [repro, setRepro] = useState(false);
    const [aux, setAux] = useState(0);
    const [aux2, setAux2] = useState(0);
    
    const bajar = () => {
        console.log('ok');
    };

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
    
    const show_interior = ()=>{
        console.log('Interiorismo');
        if(interiorshow=='visible'){
            document.documentElement.style.setProperty('--z-interior', '10');
            document.documentElement.style.setProperty('--color-contenedor-interiorismo', 'rgba(0, 0, 0, 0.8)');
            document.documentElement.style.setProperty('--show-interiorismo', 'visible');
            document.documentElement.style.setProperty('--width-contenedor-interno-interiorismo', '90vw');
            document.documentElement.style.setProperty('--height-contenedor-interno-interiorismo', '50vh');
            document.documentElement.style.setProperty('--xi-width', '5vw');
        }
        if(interiorshow=='hidden'){
            document.documentElement.style.setProperty('--color-contenedor-interiorismo', 'rgba(0, 0, 0, 0)');
            document.documentElement.style.setProperty('--show-interiorismo', 'hidden');
            document.documentElement.style.setProperty('--width-contenedor-interno-interiorismo', '0vw');
            document.documentElement.style.setProperty('--height-contenedor-interno-interiorismo', '0vh');
            document.documentElement.style.setProperty('--xi-width', '0vw');
            document.documentElement.style.setProperty('--z-interior', '1');
        }
    }
    const show_contact = ()=>{
        console.log('Show');
        if(contactshow=='visible'){
            document.documentElement.style.setProperty('--z-contactos', '10');
            document.documentElement.style.setProperty('--color-div-contact', 'rgba(0, 0, 0, 0.8)');
            document.documentElement.style.setProperty('--show', 'visible');
            document.documentElement.style.setProperty('--width-div-interno-contact', '70vw');
            document.documentElement.style.setProperty('--height-div-interno-contact', '80vh');
            document.documentElement.style.setProperty('--show-tema-width', '70vw');
            document.documentElement.style.setProperty('--show-tema-height', '10vh');
            document.documentElement.style.setProperty('--show-categoria-contenido-height', '25%');
            document.documentElement.style.setProperty('--x-width', '5vw');
            setContactshow('hidden');
        }
        if(contactshow=='hidden'){
            document.documentElement.style.setProperty('--show', 'hidden');
            document.documentElement.style.setProperty('--color-div-contact', 'rgba(2, 105, 123, 0)');
            document.documentElement.style.setProperty('--width-div-interno-contact', '0vw');
            document.documentElement.style.setProperty('--height-div-interno-contact', '0vh');
            document.documentElement.style.setProperty('--show-tema-width', '0vw');
            document.documentElement.style.setProperty('--show-tema-height', '0vw');
            document.documentElement.style.setProperty('--show-categoria-contenido-height', '0vh');
            document.documentElement.style.setProperty('--x-width', '0vw');
            document.documentElement.style.setProperty('--z-contactos', '1');
            setContactshow('visible');
        }
        console.log('Ok Show');
    }
    
    const playInicial = ()=>{
        if (aux==0){
            setSonido('play');
            setRepro(true);
            setAux(100);
        }
    }
    
    const ocultar_Xi = () =>{
        document.documentElement.style.setProperty('--color-contenedor-interiorismo', 'rgba(0, 0, 0, 0)');
        document.documentElement.style.setProperty('--show-interiorismo', 'hidden');
        document.documentElement.style.setProperty('--width-contenedor-interno-interiorismo', '0vw');
        document.documentElement.style.setProperty('--height-contenedor-interno-interiorismo', '0vh');
        document.documentElement.style.setProperty('--z-interior', '1');
        document.documentElement.style.setProperty('--xi-width', '0vw');
        setInteriorshow('visible');
    }
    
    const ocultar_X = () =>{
        document.documentElement.style.setProperty('--show', 'hidden');
        document.documentElement.style.setProperty('--color-div-contact', 'rgba(2, 105, 123, 0)');
        document.documentElement.style.setProperty('--width-div-interno-contact', '0vw');
        document.documentElement.style.setProperty('--height-div-interno-contact', '0vh');
        document.documentElement.style.setProperty('--show-tema-width', '0vw');
        document.documentElement.style.setProperty('--show-tema-height', '0vw');
        document.documentElement.style.setProperty('--show-categoria-contenido-height', '0vh');
        document.documentElement.style.setProperty('--x-width', '0vw');
        document.documentElement.style.setProperty('--z-contactos', '1');
        console.log('Function X: '+contactshow);
        setContactshow('visible');
    }
    
    useEffect(()=>{
            if (aux2==0){
                setContactshow('visible');
                setInteriorshow('visible');
                setAux2(100);
            }
        }
    );

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

            {
                /* 
                <div>
                    <UseEffect/>
                </div>
                <Canvas className='canvas'>
                    <OrbitControls enableZoom={false}/>
                    <ambientLight intensity={0.1}></ambientLight>
                    <directionalLight intensity={0.1} position={[-2,5,3]}></directionalLight>
                    <Suspense fallback={null}>
                    <Box/>
                    </Suspense>
                </Canvas> 
                */
            }
            
            <Contactos/>
            <div className="x" onClick={ocultar_X}></div>
            
            <Interiorismo/>
            <div className="x-i" onClick={ocultar_Xi}></div>

            <div className='renders'>
                <Modelos/>
            </div>

            <div className='menu-low'>
                <div className='sound' onClick={conmutar}>
                    <Volumen icono={sonido}/>
                </div>
                <div className='contact'>
                    <img src={icon_contact} className="contact_logo" alt="contact" onClick={show_contact}/>
                </div>
            </div>

            <div className='contenedor-logo-icono'>
                <span className='logo-icono'>
                    <Lottie animationData={logo_animation} loop={true} />
                </span>
            </div>
            <div className='contenedor-logo-letras'>
                <span className=''>INDOMO DESIGN</span>
            </div>
            
            <div className='services'>
                <div className='arquitectura'>
                    <div className='tema'>
                        ARQUITECTURA
                    </div>
                    <div className='video'>
                        <video width="100%" height="auto" muted loop autoPlay controls={false}>
                            <source src={video_arquitectura} type="video/mp4"/>
                        </video>
                    </div> 
                </div>
                <div className='interiorismo'>
                    <div className='tema' onClick={show_interior}>
                        INTERIORISMO
                    </div>
                    <div className='video'>
                        <video width="100%" height="auto" muted loop autoPlay controls={false}>
                            <source src={video_interior} type="video/mp4"/>
                        </video> 
                    </div>
                </div>
            </div>
            
            
            {/* 
            <div className='arrow' onClick={bajar}></div>

            <div className='servicios'>
                <Servicios/>
            </div>

            <div className='trabajos'>
                <Departamentos/>
            </div>
            <div className='separador'></div>
            
            <div className='trabajos'>
                <Edificios/>
            </div>
            <div className='separador'></div>
             */}

            
            {/* 
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
            */}
        </div>
    );
}

export default App;
