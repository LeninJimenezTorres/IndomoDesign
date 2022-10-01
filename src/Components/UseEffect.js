import React, {useState, useEffect} from "react";

export default function ScrollHooks () {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        console.log('montaje...');
        const detectarY = ()=>{
            setScrollY(window.pageYOffset);
        }
        window.addEventListener('scroll',detectarY);
        return()=>{
            window.removeEventListener('scroll',detectarY);
            console.log('desmontaje');
        }
    },[scrollY]);
    
    return(
        <>
            <h2>Hooks - UseEffect + ciclo de vida</h2>
            <p>Scroll y: {scrollY}</p>
        </>
    );
}