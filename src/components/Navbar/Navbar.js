import React, { Component } from 'react'
import './Navbar.css'

export class Navbar extends Component {

    componentDidMount () {
        const script = document.createElement("script");
        script.src = './public/scripts/main.js';
        script.async = true;
        document.body.appendChild(script);

    }

    render() {
        return (
            <div className="l-header" id="header">
    <nav className="nav bd-grid">

        
            <a href="#home" className="nav-brand">Ciru</a>
        

        <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
                <li className="nav__item"><a href="#about" className="nav__link active">About</a></li>
                <li className="nav__item"><a href="#services" className="nav__link">Services</a></li>
                <li className="nav__item"><a href="#portfolio" className="nav__link">Portfolio</a></li>
                <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
        </div>

    </nav>
    </div>
        )
    }
}

export default Navbar



    

