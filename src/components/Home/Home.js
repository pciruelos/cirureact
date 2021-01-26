import React from 'react';
import one from './1.png';
import './Home.css';

function Home() {
    return (
        <div className="home" id="home">
            <div className="home__container bd-container bd-grid">
            <div className="home__data">
            <div className="home__title">
                <h1>Hello,I'am <br /> <span className="home__title-color">Ciru<br /></span>Interactive Designer</h1>
            </div>

            <a download="" href="img/1.png" className="button">Download Cv</a>

            </div>
            <div class="home__social">
                <a href="https://www.linkedin.com/in/pablociruelos/" className="home__social-icon"><i className='fab fa-linkedin'></i></a>
                <a href="https://github.com/pciruelos" className="home__social-icon"><i className='fab fa-github' ></i></a>
                <a href="https://www.youtube.com/c/luppo2007" className="home__social-icon"><i className='fab fa-youtube' ></i></a>

            </div>
            <div className="home__img">
                <img src={one} alt="Ciru" />
            </div>
            </div> 
        </div>
    )
}

export default Home
