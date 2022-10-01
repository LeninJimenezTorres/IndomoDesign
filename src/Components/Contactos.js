import React, {useRef,useState} from "react";
import '../Styles/Contactos.css';
import Lottie from "lottie-react";
import facebook_logo from '../Galery/Animations/social-media.json';
import phone_logo from '../Galery/Animations/chat-a.json';
import email_logo from '../Galery/Animations/email.json';
import web_developer from '../Galery/Animations/happy-developer-white.json';
import facebook_logo_g from '../Galery/Animations/social-media.gif';
import phone_logo_g from '../Galery/Animations/chat-animation.gif';
import email_logo_g from '../Galery/Animations/email.gif';
import web_developer_g from '../Galery/Animations/developer.gif';
//import contact_animation from '../Galery/Animations/contact.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Contactos(props) {
    const [contactshow, setContactshow] = useState('hidden');
    
    const iconos=[
        {
            id:1,
            imagen:email_logo_g,
            title:'E-mail',
            description:'Realiza tus cotizaciones a nuestro email',
            enlace: 'mailto:comercial@indomodesign.com',
        },
        {
            id:2,
            imagen:phone_logo_g,
            title:'Chat',
            description:'Siéntete libre de escribirnos a la línea de Whatsapp',
            enlace:'https://api.whatsapp.com/send?phone=593998381400',
        },
        {
            id:3,
            imagen:facebook_logo_g,
            title:'Redes sociales',
            description:'Se parte de nuestro círculo social y síguenos en nuestra misión',
            enlace:'https://www.facebook.com/indomodesign',
        },
        {
            id:4,
            imagen:web_developer_g,
            title:'Desarrollador Web',
            description:'Te presentamos a nuestro creativo desarrollador web autor de este sitio',
            enlace:'https://leninjimeneztorres.github.io/portfolio/',
        },
    ];
//asNavFor={this.state.nav2}
    const nav1 = useRef(null);
    const nav2 = useRef(null);

    const settings =  {
        className: "center",
        centerMode: true,
        centerPadding: "40px",
        infinite: true,
        dots: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: false,
    };
    const settings_nav2 =  {
        infinite: true,
        dots: false,
        speed: 800,
        arrows:true,
    };
    return (
        <div className='contactos-div'>
            <div className="contacto-div-interno">
                <div className="tema-contactos">
                    <p>Contactos</p>
                </div>
                <div className="contactos-contenido">
                    <div className="sub-contactos-contenido-up">
                        <Slider {...settings} ref={nav1} asNavFor={nav2.current}>
                            {
                                iconos.map(
                                    image=>
                                        <div key={image.id} className="t-icono" style="padding:10px;">
                                            {/* <Lottie animationData={image.imagen} loop={true} className='contactos-iconos'/> */}
                                            <p>{image.title}</p>
                                        </div>
                                )
                            }
                        </Slider>
                    </div>
                    <div className="sub-contactos-contenido-down">
                        <Slider {...settings_nav2} ref={nav2} asNavFor={nav1.current}>
                            {
                                iconos.map(
                                    image=>
                                        <div key={image.id} className="contactos-down" style="padding:10px;">
                                            <div className='contactos-down-img'>
                                                <a className='contactos-down-img' href={image.enlace} target='_blank'><img className='imagen' src={image.imagen} alt={image.title}/></a>
                                            </div>
                                            <div className='contactos-down-a'>
                                                <a className="d-icono" href={image.enlace} target='_blank'><p>Click</p></a>
                                                <a className="d-icono" href={image.enlace} target='_blank'>{image.description}</a>
                                            </div>
                                        </div>
                                )
                            }
                        </Slider>
                    </div>
                    {/*
                    <div className="email">
                        <div className="subtema">
                            <div className="sub-m">
                                <p>E-mail</p>
                            </div>
                            <div className="sub-s">
                                <a>comercial@indomodesign.com</a>
                            </div>
                        </div>
                        <div className="logo-subtema">
                            <span className='logo-email'>
                                <Lottie animationData={email_logo} loop={true} />
                            </span>
                        </div>
                    </div>
                    <div className="phone invert">
                        <div className="subtema">
                            <div className="sub-m">
                                <p>Teléfono</p>
                            </div>
                            <div className="sub-s">
                                <a>+593 998381400</a>
                            </div>
                        </div>
                        <div className="logo-subtema">
                            <span className='logo-phone'>
                                <Lottie animationData={phone_logo} loop={true} />
                            </span>
                        </div>
                    </div>
                    <div className="facebook">
                        <div className="subtema">
                            <div className="sub-m">
                                <p>Redes</p>
                            </div>
                            <div className="sub-s">
                                <a>https://www.facebook.com/indomodesign</a>
                            </div>
                        </div>
                        <div className="logo-subtema">
                            <span className='logo-facebook'>
                                <Lottie animationData={facebook_logo} loop={true} />
                            </span>
                        </div>
                    </div>
                    <div className="developer invert">
                        <div className="subtema">
                            <div className="sub-m">
                                <p>Desarrollador Web</p>
                            </div>
                            <div className="sub-s">
                                <a>https://leninjimeneztorres.github.io/portfolio/</a>
                            </div>
                        </div>
                        <div className="logo-subtema">
                            <span className='logo-developer'>
                                <Lottie animationData={web_developer} loop={true} />
                            </span>
                        </div>
                    </div>
                    */}
                    
                </div>
            </div>
        </div>

    );
}

export default Contactos;
