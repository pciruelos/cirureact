import React from 'react'
import './Portfolio.css'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import four from './4.jpg'
import five from './5.PNG'
import six from './6.PNG'
import seven from './7.png'
import eight from './8.PNG'

function Portfolio() {
    return (
        <div className="portfolio section" id="portfolio">
            <div className="bd-container">
            <span className="section-subtitle">some previus works</span>
            <h2 className="section-title">Portfolio</h2>
            
            <div className="portfolio__nav">
                <span className="portfolio__item active-portfolio" data-filter="all">All</span>
                <span className="portfolio__item" data-filter=".web">Web</span>
                <span className="portfolio__item" data-filter=".gd">Graph Desing</span>
                <span className="portfolio__item" data-filter=".sm">Social Media</span>
            </div>

            <div className="portfolio__container bd-grid">

            <div className="portfolio__content mix sm">
                    <a href="https://github.com/pciruelos"><img src={four} alt="" className="portfolio__img" /></a>
                    <div className="portfolio__data">
                        <span className="portfolio__subtitle">Web Dev</span>
                        <h2 className="portfolio__title">Web Developer</h2>
                        <a href="https://github.com/pciruelos" className="button button-outline">View details</a>
                    </div>
                </div>
                <div className="portfolio__content mix web">
                    <a href="https://www.behance.net/elchicoprodigio"><img src={one} alt="" className="portfolio__img" /></a>
                    <div className="portfolio__data">
                        <span className="portfolio__subtitle">Social Media</span>
                        <h2 className="portfolio__title">Comunity manager</h2>
                        <a href="https://www.behance.net/elchicoprodigio" className="button button-outline">View details</a>
                    </div>
                </div>
            
                <div className="portfolio__content mix web">
                    <a href="https://www.behance.net/elchicoprodigio"><img src={two} alt="" className="portfolio__img" /></a>
                    <div className="portfolio__data">
                        <span className="portfolio__subtitle">UX / UI</span>
                        <h2 className="portfolio__title">UX / UI project</h2>
                        <a href="https://www.behance.net/elchicoprodigio" className="button button-outline">View details</a>
                    </div>
                </div>
            
                <div className="portfolio__content mix gd">
                    <a href="https://www.youtube.com/c/luppo2007"><img src={three} alt="" className="portfolio__img" /></a>
                    <div className="portfolio__data">
                        <span className="portfolio__subtitle">After Effects</span>
                        <h2 className="portfolio__title">Video publicity</h2>
                        <a href="https://www.youtube.com/c/luppo2007" className="button button-outline">View details</a>
                    </div>
                </div>
            
                
                <div className="portfolio__content mix web">
                    <a href="https://www.behance.net/gallery/96242343/tri-fold-cv-cv-triptico"><img src={five} alt="" className="portfolio__img" /></a>
                    <div className="portfolio__data">
                        <span className="portfolio__subtitle">Graph Design</span>
                        <h2 className="portfolio__title">Tri-Fold CV</h2>
                        <a href="https://www.behance.net/gallery/96242343/tri-fold-cv-cv-triptico" className="button button-outline">View details</a>
                    </div>
                </div>
            
                <div className="portfolio__content mix web">
                    <a href="https://www.behance.net/elchicoprodigio"><img src={six} alt="" className="portfolio__img" /></a>
                    <div className="portfolio__data">
                        <span className="portfolio__subtitle">App</span>
                        <h2 className="portfolio__title">Mobile App</h2>
                        <a href="https://www.behance.net/elchicoprodigio" className="button button-outline">View details</a>
                    </div>
                </div>
            
                <div className="portfolio__content mix gd">
                    <a href="https://www.youtube.com/c/luppo2007"><img src={seven} alt="" className="portfolio__img" /></a>
                    <div className="portfolio__data">
                        <span className="portfolio__subtitle">Web Developer</span>
                        <h2 className="portfolio__title">More Webs</h2>
                        <a href="https://www.youtube.com/c/luppo2007" className="button button-outline">View details</a>
                    </div>
                </div>
            
                <div className="portfolio__content mix sm">
                    <a href="https://youtu.be/m7s39lhc-U8"><img src={eight} alt="" className="portfolio__img" /></a>
                    <div className="portfolio__data">
                        <span className="portfolio__subtitle">Video Editing</span>
                        <h2 className="portfolio__title">Short Film</h2>
                        <a href="https://youtu.be/m7s39lhc-U8" className="button button-outline">View details</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Portfolio
