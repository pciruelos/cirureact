import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact section" id="contact">
            <div className="bd-container">
            <span className="section-subtitle">feel free to write me :)</span>
            <h2 className="section-title">Contact</h2>

            <div className="contact__container bd-grid">
                <div className="contact__content bd-grid">

                    <div className="contact__box mailbox">
                        <i className="fas fa-envelope contact__icon"></i>
                        <h3 className="contact__title">pciruelos@yahoo.com</h3>
                        <span className="contact__description">still working, yes haha. Or you can use the form below.</span>
                    </div>

                    <form action="" className="contact__form">
                        <div className="contact__inputs">
                            <input type="text" placeholder="Name" className="contact__input" />
                            <input type="email" placeholder="Email" className="contact__input" />
                        </div>
                        <div className="contact__inputs">
                            <input type="text" placeholder="Subject" className="contact__input" />
                            <input type="number" placeholder="Phone Number" className="contact__input" />
                        </div>

                        <textarea name="" placeholder="Message"  className="contact__input" id="" cols="0" rows="8"></textarea>

                        <input type="submit" value="Send Message" className="button contact__button" />

                    </form>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact
