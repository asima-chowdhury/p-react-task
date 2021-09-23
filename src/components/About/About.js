import React from 'react';
import './About.css';
import aboutImg from '../../images/about.png';

const About = () => {
    return (
        <div className="container">
            <div className="about">
                <div className="about-gallery">
                    <img src={aboutImg} alt="aboutImg" />
                    <img src={aboutImg} alt="aboutImg" />
                    <img src={aboutImg} alt="aboutImg" />
                </div>
                <div className="about-content">
                    <h1>About Us</h1>
                    <p>Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will si. The placeholder text used in design when creating content. It helps designers plan out where the content will sitt</p>
                </div>
            </div>
        </div>
    );
};

export default About;