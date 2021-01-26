import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className="project section">
            <div className="bd-container">
            <div className="project__container bd-grid">
                <div className="project__data">
                    <i className="fas fa-star"></i>
                    <div>
                        <h2 className="project__title">Current ideas on my mind</h2>
                        <p className="project__description">wanna join in a crazy jurney?</p>
                    </div>
                    <div>
                        <a href="www.google.com" className="button white-button">Join</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Projects
