import React, {useRef,useState,useEffect} from "react";
import '../Styles/Interiorismo.css';
//import video_luminaria from '../Galery/Videos/light.mp4';
//import video_muebles from '../Galery/Videos/muebles.mp4';
//import video_interior from '../Galery/Videos/interior.mp4';

function Interiorismo() {
    const [videofondoi, setVideofondoi] = useState();
    const video_interior="https://media.githubusercontent.com/media/LeninJimenezTorres/indomodesign.media/master/Videos/interior.mp4";
    const video_muebles="https://media.githubusercontent.com/media/LeninJimenezTorres/indomodesign.media/master/Videos/muebles.mp4";
    const video_luminaria="https://media.githubusercontent.com/media/LeninJimenezTorres/indomodesign.media/master/Videos/light.mp4";
    return(
        <div className="contenedor-interiorismo">
            <div className="contenedor-interno">
                <div className="diseno-interior">
                    <div className="inter-video">
                        <a href='#' target='_blank' className="video-interior" >
                            <video width="100%" height="auto" muted loop autoPlay controls={false}>
                                <source src={video_interior} type="video/mp4"/>
                            </video>
                        </a>
                    </div>
                    <div className="inter-p" onMouseOver={()=>{setVideofondoi(video_interior)}}>
                        <a href='#' target='_blank'>Interiorismo y Remodelación</a>
                    </div>
                </div>
                <div className="muebleria">
                    <div className="inter-video">
                        <a href='#' target='_blank' className="video-muebles" >
                            <video width="100%" height="auto" muted loop autoPlay controls={false}>
                                <source src={video_muebles} type="video/mp4"/>
                            </video>
                        </a>
                    </div>
                    <div className="inter-p" onMouseOver={()=>{setVideofondoi(video_muebles)}}>
                        <a href='#' target='_blank'>Muebles</a>
                    </div>
                </div>
                <div className="luminaria">
                    <div className="inter-video">
                        <a href='#' target='_blank' className="video-luminaria" >
                            <video width="100%" height="auto" muted loop autoPlay controls={false}>
                                <source src={video_luminaria} type="video/mp4"/>
                            </video>
                        </a>
                    </div>
                    <div className="inter-p" onMouseOver={()=>{setVideofondoi(video_luminaria)}}>
                        <a href='#' target='_blank'>Luminarias</a>
                    </div>
                </div>
            </div>
            <div className="video-fondo-inter">
                <video  key={videofondoi} width="100%" height="auto" muted loop autoPlay controls={false}>
                    <source src={videofondoi} type="video/mp4"/>
                </video>
            </div>
        </div>
    );
    
}

export default Interiorismo;