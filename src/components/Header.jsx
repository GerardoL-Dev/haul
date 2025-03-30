import React from 'react';
import '../styles/HeaderStyle.css';
import fotoPerfil from '../images/face.jfif';

const Header = () =>{
    return(
        <header className="header">
            <div className="header-content">
                <h1>Gerardo Leivas</h1>
                <p>Full Stack Developer</p>
            </div>
            <div className='header-image'>
            <img src={fotoPerfil} alt="Gerardo Leivas" />
            </div>            
        </header>        
    );
};

export default Header;