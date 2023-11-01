import React from 'react';
import '../App.css';
import Bilde from'../assets/blogER.png'

function PiektaisUzd () {
    return(
        <article>
            <div className='hz'>
            <p>ER DIAGRAMMA BLOGAM</p>
            <img src={Bilde} className='foto'></img>
            
            </div>
        </article>
    );
}

export default PiektaisUzd;