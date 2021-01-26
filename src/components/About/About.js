import React from 'react'
import './About.css'
import two from './2.png';

function About() {
    return (
        <div className="about section" id="about">
             <div className="bd-container">
             <span className="section-subtitle">My history</span>
            <h2 className="section-title">About me</h2>

            <div className="about__container bd-grid">
                <div className="about__img">
                    <img src={two} alt="" />
                </div>
                
                <div>
                    <h2 className="about__subtitle">I'am Pablo Ciruelos</h2>
                    <p className="about__text">Interactive designer based in Copenhagen. Definied as a creative person,
                         i have Studies in Graph design & Web / Sofware Developer <br/>
                         <br/>Im trying to introduce my self in the professional world so im looking for an entry level / Junior / Trainee position.</p>           
                </div>
                                
            </div>
        </div>
        </div>
    )
}

export default About
