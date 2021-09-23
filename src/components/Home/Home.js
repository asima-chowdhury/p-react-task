import React from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import './Home.css';
import homeSlider from '../../images/home-slider.jpg';

const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: `linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) ), url(${homeSlider})` }}>
            <Header/>
            <Slider/>
        </div>
    );
};

export default Home;