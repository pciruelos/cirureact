import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__description bd-container">

                <h1 className="footer__title">Ciru</h1>
                <p className="footer__description">Thats all, see you</p>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/pablociruelos/" className="footer__link"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/pciruelos" className="footer__link"><i className="fab fa-github"></i></a>
                    <a href="https://www.youtube.com/c/luppo2007" className="footer__link"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.behance.net/elchicoprodigio" className="footer__link"><i className="fab fa-behance"></i></a>
                </div>
                <p className="footer__copy">&#169; 2021 Cirusites</p><a href="www.google.com">Complete Site map</a>
            </div>
        </div>
    )
}

export default Footer
