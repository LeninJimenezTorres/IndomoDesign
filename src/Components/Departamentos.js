import React, {Component} from "react";

import dep from '../Galery/Renders/departamento/dep.mp4';
import dep1 from '../Galery/Renders/departamento/dep1.jpeg';
import dep2 from '../Galery/Renders/departamento/dep2.jpeg';
import dep3 from '../Galery/Renders/departamento/dep3.jpeg';
import dep4 from '../Galery/Renders/departamento/dep4.jpeg';
import dep5 from '../Galery/Renders/departamento/dep5.jpeg';
import dep6 from '../Galery/Renders/departamento/dep6.jpeg';
import dep7 from '../Galery/Renders/departamento/dep7.jpeg';

import '../Styles/Servicios.css';
//import Slider from 'infinite-react-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Departamentos extends Component {
    render(){
        const images = [
            {
                id:'1',
                title:'1',
                image:dep1   
            },
            {
                id:'2',
                title:'2',
                image:dep2   
            },
            {
                id:'3',
                title:'3',
                image:dep3   
            },
            {
                id:'4',
                title:'4',
                image:dep4   
            },
            {
                id:'5',
                title:'5',
                image:dep5   
            },
            {
                id:'6',
                title:'6',
                image:dep6   
            },
            {
                id:'7',
                title:'7',
                image:dep7   
            },
            /*{
                id:'8',
                title:'8',
                image:dep7   
            },
            {
                id:'9',
                title:'7',
                image:dep7   
            },
            {
                id:'10',
                title:'7',
                image:dep7   
            },
            {
                id:'11',
                title:'7',
                image:dep7   
            },
            {
                id:'12',
                title:'7',
                image:dep7   
            },
            {
                id:'13',
                title:'7',
                image:dep7   
            },
            {
                id:'14',
                title:'7',
                image:dep7   
            },
            {
                id:'15',
                title:'7',
                image:dep7   
            },*/
            
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

            // Infinite-react-carousel
            // dots: true,
            // autoplay: true,
            // autoplaySpeed: 3000,
            // centerMode: true,

        };

        const renderCustomThumbs = ()=>{
            const thumbList = images.map(image =>  
                <div className="tira" key={1}>
                    <picture key={image.id}>
                    <source src={image.image} type="image/jpg"/>
                        <img
                        key={image.id}
                        src={image.image}
                        alt={image.title}
                        height="70"
                        />
                    </picture>
                </div>
            )
            return (thumbList)
        }
        
        return(
            <section className='carousel-contenedor'>
                <div className='carousel-interno'>
                    <div className='video-contenedor'>
                        <video id='vid' width="100%" height="100%" muted loop autoPlay controls={false}>
                            <source src={dep} type="video/mp4"/>
                        </video>
                        <div className='categoria'>
                            <p className='categoria-texto'>Departamentos y Casas</p>
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
                        
                        {/* 
                        Library react-responsive-carousel
                        <Slider  className='slider__content'
                        dots={true}
                        autoplay={true}
                        autoplaySpeed={3000}
                        centerMode={true}
                        >
                            {
                                images.map(image => <div key={1} className="slider__content--item">
                                    <img src={image.image} alt={image.id} className='imagen'/>
                                </div>)
                            }
                        </Slider>
                        {
                        */}

                        {/* 
                        Library react-responsive-carousel
                        <Carousel className="carousel2" 
                            autoPlay 
                            infiniteLoop 
                            showArrows={false}
                            showThumbs={true}
                            showIndicators={true}
                            showStatus={false}
                            renderThumbs={renderCustomThumbs}
                            verticalSwipe='natural'
                        >
                            {
                                images.map(image => <div key={1} className="slider__content--item">
                                    <img src={image.image} alt={image.id} className='imagen'/>
                                </div>)
                            }
                        </Carousel> */}
                    </div>
                </div>
            </section>
        );
    }
}