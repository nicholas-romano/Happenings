import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
// import { baseUrl } from "./config";

const Review = () => {
    const settings = {
        lazyLoad: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        className: "slides"
    };
    return (
        <div className="container is-fluid">
            How’s the vibe?
            <Slider {...settings}>
                <div>
                    <h1>😴</h1>
                    <br></br>
                    {/* <img src={emoji.url}></img> */}
                    <button>Lame</button>
                </div>
                <div>
                    <h1>😎</h1>
                    <br></br>
                    {/* <img src={} /> */}
                    <button>Chill</button>
                </div>
                <div>
                    <h1>🔥</h1>
                    <br></br>
                    {/* <img src={baseUrl + "/abstract03.jpg"} /> */}
                    <button>Fun</button>
                </div>
            </Slider>
        </div >
    );
};
export default Review;