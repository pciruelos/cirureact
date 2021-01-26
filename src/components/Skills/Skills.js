import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <div className="skills section" id="skills">
        <div className="bd-container">
        <span className="section-subtitle">what can i do?</span>
        <h2 className="section-title">Skills</h2>

        <div className="bd-grid">
            <h2 className="skills__subtitle ta-center skills__aling">Profesional Skills</h2>
            <p className="skills__text ta-center skills__aling">Full stack web developer with experience in Object Oriented Programming, Model-View-Controller, Single Page Applications, Ecommerce, CMS and more</p>
        </div>

        <div className="skills__container bd-grid">          

                <div className="skills__data">
                    <div className="skills__names">
                        <i className='fab fa-html5 skills__icon'></i>
                        <span className="skills__name">HTML5 / CSS / JS</span>
                    </div>
                    <div className="skills__bar skills__html">

                    </div>
                    <div>
                        <span className="skills__percentage">90%</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='fab fa-js skills__icon'></i>
                        <span className="skills__name">React/Angular</span>
                    </div>
                    <div className="skills__bar skills__css">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">90%</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='fas fa-database skills__icon' ></i>
                        <span className="skills__name">Node/Express & DB</span>
                    </div>
                    <div className="skills__bar skills__js">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">85%</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='fab fa-digital-ocean skills__icon'></i>
                        <span className="skills__name">Deploy / Docker / Cloudservices</span>
                    </div>
                    <div className="skills__bar skills__ux">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">65%</span>
                    </div>
                
            </div>
            
        </div>
    </div>
    </div>
    )
}

export default Skills
