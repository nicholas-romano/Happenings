import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { baseUrl } from "./config";

const emojis = [{
    name: "photo 1",
    url: "https://i.pinimg.com/originals/69/01/88/690188487c670d01145817bf9c4666a3.png"
}]

const Review = () => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        className: "slides"
    };
    return (
        <div>
            <Slider {...settings}>
                {emojis.map(emoji => {
                    return (<div><img width="50%" src={emoji.url}></img></div>)
                })}
            </Slider>
        </div >
    );
};
export default Review;