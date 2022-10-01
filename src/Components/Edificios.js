import React, {Component} from "react";

import edi from '../Galery/Renders/edificio/edi.mp4';
import edi1 from '../Galery/Renders/edificio/edi1.jpeg';
import edi2 from '../Galery/Renders/edificio/edi2.jpeg';
import edi3 from '../Galery/Renders/edificio/edi3.jpeg';
import edi4 from '../Galery/Renders/edificio/edi4.jpeg';
import edi5 from '../Galery/Renders/edificio/edi5.jpeg';
import edi6 from '../Galery/Renders/edificio/edi6.jpeg';

import '../Styles/Servicios.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Edificios extends Component {
    render(){
        const images = [
            {
                id:'1',
                title:'1',
                image:edi1   
            },
            {
                id:'2',
                title:'2',
                image:edi2   
            },
            {
                id:'3',
                title:'3',
                image:edi3   
            },
            {
                id:'4',
                title:'4',
                image:edi4   
            },
            {
                id:'5',
                title:'5',
                image:edi5   
            },
            {
                id:'6',
                title:'6',
                image:edi6   
            }
        ];
        const settings =  {
            className: "center",
            centerMode: true,
            centerPadding: "40px",
            infinite: true,
            dots: true,
            autoplay: true,
            speed: 800,
            autoplaySpeed: 3000,
            slidesToShow: 2,
            slidesToScroll: 1,
        };
        return(
            <section className='carousel-contenedor'>
                <div className='carousel-interno'>
                    <div className='video-contenedor'>
                        <video id='vid' width="100%" height="100%" muted loop autoPlay controls={false}>
                            <source src={edi} type="video/mp4"/>
                        </video>
                        <div className='categoria'>
                            <p className='categoria-texto'>Urbanismo y Edificaciones</p>
                        </div>
                    </div>
                    <div className='slider-container'>
                        <Slider {...settings}>
                            {
                                images.map(image => <div key={image.id} className="slider__content--item" style="padding:10px;">
                                    <img width="100%" height="100%" src={image.image} alt={image.id} className='imagen' />
                                </div>)
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}