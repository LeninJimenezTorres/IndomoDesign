import React, {Component, Suspense, useEffect, useState} from "react";
import '../Styles/Modelos.css';

import * as THREE from 'three';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


import {Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {ModelCello} from '../Components/Sala/Cello';
import {ModelSalaParedes} from '../Components/Sala/Salaparedes';
import {ModelSalaPiso} from '../Components/Sala/Salapisob';
import {ModelCortinaSalaA} from '../Components/Sala/Cortinasalaa';
import {ModelCortinaSalaB} from '../Components/Sala/Cortinasalab';
import {ModelCortinaSalaC} from '../Components/Sala/Cortinasalac';
import {ModelPortaCortinaSala} from '../Components/Sala/Portacortinasala';
import {ModelAparadorSala} from '../Components/Sala/Aparador';
import {ModelCuadroSala} from '../Components/Sala/Cuadro';
import {ModelTVStand} from '../Components/Sala/Tvstand';
import {ModelPuerta} from '../Components/Sala/Puerta';
import {ModelMaceta} from '../Components/Sala/Maceta';
import {ModelAlfombra} from '../Components/Sala/Alfombra';
import {ModelLamparaGrande} from '../Components/Sala/Lamparagrande';
import {ModelLampara} from '../Components/Sala/Lampara';
import {ModelVela} from '../Components/Sala/Vela';
import {ModelCojines} from '../Components/Sala/Cojines';
import {ModelMuebles} from '../Components/Sala/Muebles';
import {ModelTV} from '../Components/Sala/Tv';
import {ModelBarredera} from '../Components/Sala/Barrederas';
import {ModelMesita} from '../Components/Sala/Mesita';
import {ModelEstatua} from '../Components/Sala/Estatua';
import {ModelVentanasSala} from '../Components/Sala/Ventanas';
import {ModelMarcos} from '../Components/Sala/Marcos';
import {ModelCeiling} from '../Components/Sala/Ceiling';
import curva_w from './Galery/punterocurvaw.png';
import curva_b from './Galery/punterocurva.png';
import marco_w from './Galery/punterobasew.png';
import marco_b from './Galery/punterobase.png';


export default function Modelos () {
    
    function fondo(CX,CY,displayX,displayY){
        var fondo=document.getElementById('base');
        var curva = document.getElementById('cursor-f');
        var marco = document.getElementById('cursor-base');
        
        let puntero_w='url("'+curva_w+'")';
        let puntero_b='url("'+curva_b+'")';
        let marco_puntero_w='url("'+marco_w+'")';
        let marco_puntero_b='url("'+marco_b+'")';

        var col1 = '#14213d';
        var col2 = '#fca311';
        var col3 = '#e5e5e5';
        var col4 = '#000000';
        var col5 = '#580c1f';
        var lim1 = 2.95/6;
        var lim2 = 0.57;
        var lim3 = 0.70;
        var lim4 = 0.84;
        var lim5 = 0.95;
        
        if (fondo) {
            /*if (((CX>=0 && CX<displayX/5) || (CX>=displayX*4/5 && CX<displayX)) && (CY>=displayY*2.95/6 && CY<displayY*97/100)) {
                fondo.style.setProperty('background-color','#ffeeff');
                curva.style.setProperty('background-color','#157555');
            }
            else if ((CX>=displayX/5 && CX<displayX*4/5) && (CY>=displayY*3/4 && CY<displayY*97/100) ){
                fondo.style.setProperty('background-color','#ffeeff');
            }*/
            if (CY>=displayY*lim1 && CY<displayY*lim2) {
                curva.style.setProperty('--puntero', puntero_w);
                fondo.style.setProperty('background-color',col1);
                marco.style.setProperty('--punterobase', marco_puntero_w);
            }
            else if (CY>=displayY*lim2 && CY<displayY*lim3) {
                curva.style.setProperty('--puntero', puntero_b);
                fondo.style.setProperty('background-color',col2);
                marco.style.setProperty('--punterobase', marco_puntero_w);
            }
            else if (CY>=displayY*lim3 && CY<displayY*lim4) {
                curva.style.setProperty('--puntero', puntero_b);
                fondo.style.setProperty('background-color',col3);
                marco.style.setProperty('--punterobase', marco_puntero_b);
            }
            else if (CY>=displayY*lim4 && CY<displayY*lim5) {
                curva.style.setProperty('--puntero', puntero_w);
                fondo.style.setProperty('background-color',col4);
                marco.style.setProperty('--punterobase', marco_puntero_w);
            }
            else if (CY>=displayY*lim5) {
                curva.style.setProperty('--puntero', puntero_w);
                fondo.style.setProperty('background-color',col5);
                marco.style.setProperty('--punterobase', marco_puntero_w);
            }
            else{
                marco.style.setProperty('--punterobase', marco_puntero_b);
                curva.style.setProperty('background-color','rgba(0,0,0,0)');
                curva.style.setProperty('--puntero', puntero_b);
                fondo.style.setProperty('background-color','#000000');
            }
        }
    }

    const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
    const handleWindowMouseMove = event => {
        setGlobalCoords({
            x: event.screenX,
            y: event.screenY,
        });
        //console.log('El tipo es: ' + typeof globalCoords.y + ' de: ' + globalCoords.x);
        //fondo(globalCoords.y);

    };
    
    useEffect(() => {
        console.log('Funcion puntero');
        
        const cursor = document.createElement('div');
        const cursorF = document.createElement('div');
        const cursorbase = document.createElement('div');
        cursor.className = 'cursor';
        cursorF.className = 'cursor-f';
        cursorbase.className = 'cursor-base';
        cursor.id = 'cursor';
        cursorF.id = 'cursor-f';
        cursorbase.id = 'cursor-base';
        
        document.body.appendChild(cursor);
        document.body.appendChild(cursorF);
        document.body.appendChild(cursorbase);
        
        let cursorXF = 0;
        let cursorYF = 0;
        let cursorXB = 0;
        let cursorYB = 0;
        let pageX = 0;
        let pageY = 0;
        let size = 10;
        let sizeF = 56;
        let sizeB = 56;
        let followSpeed = 0.0008;
        let followSpeedB = 0.8;
        let puntero='url("'+curva_b+'")';
        let marco_puntero='url("'+marco_b+'")';
        
        function loop() {
            cursorXF=(1-followSpeed)*cursorXF+followSpeed*pageX;
            cursorYF=(1-followSpeed)*cursorYF+followSpeed*pageY;
            cursorXB=(1-followSpeedB)*cursorXB+followSpeedB*pageX;
            cursorYB=(1-followSpeedB)*cursorYB+followSpeedB*pageY;
            
            cursorF.style.left = cursorXF + sizeF/32 + 'px';
            cursorF.style.top = cursorYF - sizeF/24 + 'px';
            cursorbase.style.left = cursorXB + sizeB/32 + 'px';
            cursorbase.style.top = cursorYB - sizeB/24 + 'px';

            requestAnimationFrame(loop);
        }

        var curva = document.getElementById('cursor-f');
        var marco = document.getElementById('cursor');
        //var basecursor = document.getElementById('cursor-base');
        
        curva.style.setProperty('--puntero', puntero);
        marco.style.setProperty('--marco-puntero', marco_puntero);
        cursorbase.style.setProperty('--punterobase', marco_puntero);
        
        cursor.style.setProperty('--size', size+'px');
        cursorF.style.setProperty('--sizeF', sizeF+'px');
        cursorbase.style.setProperty('--sizeB', sizeB+'px');
        
        
        window.addEventListener('mousemove', function(e) {
        
            setGlobalCoords({
                x: e.screenX,
                y: e.screenY,
            });

            pageX = e.clientX;
            pageY = e.clientY;
            let CY = e.screenY;
            let CX = e.screenX;
            let displayX = this.window.innerWidth;
            var displayY = this.window.innerHeight;

            /*
            cursorXB=(1-followSpeed)*cursorXB+followSpeed*pageX;
            cursorYB=(1-followSpeed)*cursorYB+followSpeed*pageY;
            cursorbase.style.left = cursorXB + sizeF/32 + 'px';
            cursorbase.style.top = cursorYB - sizeF/24 + 'px';
            */
            if ((e.clientX > 0) && (e.clientX+size*3.5 < displayX)) {
                cursor.style.left = e.clientX+size*3.5+'px';
            }
            if (e.clientY+size*2 < displayY) {
                cursor.style.top = e.clientY+size*2+'px';
            }
            loop();
            //console.log('Coordenadas: (' + CX + ',' + CY + ')');
            //console.log('Ancho: ' + displayX);
            //console.log('Alto: ' + displayY);
            fondo(CX,CY,displayX,displayY);
        });

        //window.addEventListener('mousemove', handleWindowMouseMove);
         
        return () => {
            window.removeEventListener('mousemove', loop);
            };
    }, []);
    
    return(
        <div className='modelo-container'>
            <div className='frase'  onMouseOver={console.log('Moviendo....')}>
                <p className='frase2'>ARQUITECTURA E INTERIORISMO <br/> ESTUDIO <br/></p>
            </div>
            <div className='modelo'>
                <Canvas className='canvas'>
                    <OrbitControls enableZoom={true} rotateSpeed={0.05} panSpeed={0.1} minDistance={3} maxDistance={6}/>
                    <ambientLight intensity={0.4}></ambientLight>
                    <directionalLight intensity={0.4} position={[-2,5,3]}></directionalLight>
                    <Suspense fallback={null}>
                        <ModelAparadorSala scale={[1.4,1.1,1.17]} position={[-1,-2,-7.25]} rotation={[0,270,0]}/>
                        <ModelVela scale={[1,1.5,1.5]} position={[-1.5,-2.7,-5.7]} rotation={[0,270,0]}/>
                        <ModelVela scale={[1,1.5,1.5]} position={[-0.8,-2.7,-5.72]} rotation={[0,270,0]}/>
                        <ModelVela scale={[1,1.5,1.5]} position={[-1.3,-2.7,-5.75]} rotation={[0,270,0]}/>
                        <ModelVela scale={[1,1.5,1.5]} position={[-1,-2.7,-5.68]} rotation={[0,270,0]}/>
                        <ModelCuadroSala scale={[1.4,1.1,1.17]} position={[-1.05,-2,-7.25]} rotation={[0,270,0]}/>
                        <ModelCojines scale={[1.4,1.1,1.17]} position={[-2.05,-2,-7.25]} rotation={[0,270,0]}/>
                        <ModelMuebles scale={[1.4,1.1,1.17]} position={[-2.05,-2,-7.25]} rotation={[0,270,0]}/>
                        <ModelBarredera scale={[1.8,1.2,1.2]} position={[0,-2,-7]} rotation={[0,270,0]}/>
                        <ModelCeiling scale={[1.4,1.1,1.17]} position={[8,-3,8]} rotation={[0,270,0]}/>
                        <ModelCeiling scale={[1.4,1.1,1.17]} position={[12.5,-3,9]} rotation={[0,270,0]}/>
                        <ModelCeiling scale={[1.4,1.1,1.17]} position={[17,-3,10]} rotation={[0,270,0]}/>
                        <ModelMesita scale={[1.4,1.1,1.17]} position={[-2.05,-2,-7.25]} rotation={[0,270,0]}/>
                        <ModelEstatua scale={[1.4,1.1,1.17]} position={[-2.05,-2,-7.25]} rotation={[0,270,0]}/>
                        <ModelMaceta scale={[1,1.5,1.5]} position={[0,-2,-7]} rotation={[0,270,0]}/>
                        <ModelLamparaGrande scale={[1.5,1.5,1.5]} position={[-6,-2.2,-9.5]} rotation={[0,270,0]}/>
                        <ModelLamparaGrande scale={[1.5,1.5,1.5]} position={[2.5,-2.2,-17]} rotation={[0,270,0]}/>
                        <ModelLampara scale={[1,1.5,1.5]} position={[4,-2.5,-7.6]} rotation={[0,270,0]}/>
                        <ModelLampara scale={[1,1.5,1.5]} position={[3.1,-2.5,-1.9]} rotation={[0,270,0]}/>
                        <ModelAlfombra scale={[1.8,1.5,1.4]} position={[-1,-2,-6.7]} rotation={[0,270,0]}/>
                        <ModelTV scale={[1,1.5,1.5]} position={[4,-2.5,-7.6]} rotation={[0,270,0]}/>
                        <ModelTVStand scale={[1,1,1.45]} position={[4,-2,-7.6]} rotation={[0,270,0]}/>
                        <ModelPuerta scale={[1.8,1.2,1.2]} position={[0,-2,-7]} rotation={[0,270,0]}/>
                        <ModelCello scale={[1,1,1]} position={[3.5,-2,-6.5]} rotation={[0,270,0]}/>
                        <ModelSalaParedes scale={[1.8,1.2,1.2]} position={[0,-2,-7]} rotation={[0,270,0]}/>
                        <ModelSalaPiso className='piso' scale={[1.8,1.2,1.2]} position={[0,-2,-7]} rotation={[0,270,0]}/>
                        <ModelMarcos scale={[1,1.28,1.22]} position={[-4,-2.35,-7.7]} rotation={[0,270,0]}/>
                        <ModelVentanasSala scale={[1,1.28,7.4]} position={[0.25,-2.35,-32]} rotation={[0,270,0]}/>
                        <ModelCortinaSalaA scale={[1,1,1]} position={[-4.05,-1.4,-7.2]} rotation={[0,270,0]}/>
                        <ModelCortinaSalaB scale={[1,1,1]} position={[-3.90,-1.4,-7.8]} rotation={[0,270,0]}/>
                        <ModelCortinaSalaC scale={[1,1,1]} position={[-3.75,-1.4,-8.4]} rotation={[0,270,0]}/>
                        <ModelPortaCortinaSala scale={[1.2,1,1.17]} position={[-2.95,-1.1,-7.7]} rotation={[0,270,0]}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className='base' id='base'></div>
            {/* <div className='base2' id='base2' ></div> */}
            {/* <div className='base2' id='base2' > Coordenadas: ({globalCoords.x} , {globalCoords.y}) </div> */}
        </div>
    )
}