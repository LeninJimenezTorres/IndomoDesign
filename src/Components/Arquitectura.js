import React, {useRef,useState,useEffect} from "react";
import '../Styles/Arquitectura.css';
import video_planos from '../Galery/Videos/light.mp4';
import video_recorridos from '../Galery/Videos/muebles.mp4';
import video_operativa from '../Galery/Videos/interior.mp4';

function Arquitectura() {
    const [videofondoa, setVideofondoi] = useState();

    return(
        <div className="contenedor-arquitectura">
            <div className="contenedor-interno-arqui">
                <div className="planos">
                    <div className="arqui-video">
                        <a href='#' target='_blank' className="video-planos" >
                            <video width="100%" height="auto" muted loop autoPlay controls={false}>
                                <source src={video_planos} type="video/mp4"/>
                            </video>
                        </a>
                    </div>
                    <div className="inter-p" onMouseOver={()=>{setVideofondoa(video_planos)}}>
                        <a href='#' target='_blank'>Planos Arquitectonicos</a>
                    </div>
                </div>
                <div className="recorridos-virtuales">
                    <div className="arqui-video">
                        <a href='#' target='_blank' className="video-recorridos" >
                            <video width="100%" height="auto" muted loop autoPlay controls={false}>
                                <source src={video_recorridos} type="video/mp4"/>
                            </video>
                        </a>
                    </div>
                    <div className="inter-p" onMouseOver={()=>{setVideofondoa(video_recorridos)}}>
                        <a href='#' target='_blank'>Recorridos Virtuales</a>
                    </div>
                </div>
                <div className="construccion">
                    <div className="arqui-video">
                        <a href='#' target='_blank' className="video-construccion" >
                            <video width="100%" height="auto" muted loop autoPlay controls={false}>
                                <source src={video_operativa} type="video/mp4"/>
                            </video>
                        </a>
                    </div>
                    <div className="inter-p" onMouseOver={()=>{setVideofondoa(video_operativa)}}>
                        <a href='#' target='_blank'>Logística y Operativa</a>
                    </div>
                </div>
            </div>
            <div className="video-fondo-arqui">
                <video  key={videofondoa} width="100%" height="auto" muted loop autoPlay controls={false}>
                    <source src={videofondoa} type="video/mp4"/>
                </video>
            </div>
        </div>
    );
    
}

export default Arquitectura;