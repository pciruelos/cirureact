import React from 'react'
import Link from 'react-router-dom'
import './Services.css'

const Services = () => {
    return (
        <div className="services section" id="services">
            <div className="bd-container">
            <span className="section-subtitle">also i offer:</span>
            <h2 className="section-title">Services</h2>
            <div className="services__container bd-grid">

                <div className="services__data">
                    <i className="fas fa-palette services__icon"></i>
                    <h3 className="services__title">Graph Design</h3>
                    <p className="services__description"></p>
                    <a href="www.google.com" className="button">know more</a>

                </div>
                <div className="services__data">
                    <i className="fas fa-file-code services__icon"></i>
                    <h3 className="services__title">Web developer</h3>
                    <p className="services__description"></p>
                    <a href="www.google.com" className="button">know more</a>

                </div>
                <div className="services__data">
                    <i className="fas fa-photo-video services__icon"></i>
                    <h3 className="services__title">Video Editing</h3>
                    <p className="services__description"></p>
                    <a href="www.google.com" className="button">know more</a>

                </div>
                <div className="services__data">
                    <i className="fas fa-ad services__icon"></i>
                    <h3 className="services__title">Social Media</h3>
                    <p className="services__description"></p>
                    <a href="www.google.com" className="button">know more</a>

                </div>

            </div>
        </div>
        </div>
    )
}

export default Services
