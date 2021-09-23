import React from 'react';
import './SliderComponent.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderComponent = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings}>
            <div className="slider">
                <div className="slider-content">
                    <h1>A picture is worth a thousand words</h1>
                    <p>It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                    <a href="#home" className="btn">View Gallery</a>
                </div>
            </div>
            <div className="slider">
                <div className="slider-content">
                    <h1>It's a memory captured in photos</h1>
                    <p>It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                    <a href="#home" className="btn">View Gallery</a>
                </div>
            </div>
        </Slider>
    );
};

export default SliderComponent;