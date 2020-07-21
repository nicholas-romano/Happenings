import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

const Review = () => {

    const [mood, setMood] = React.useState();
    console.log(mood)
    const [safety, setSafety] = React.useState();
    console.log(safety)

    const acceptUserMood = (userMood) => {
        setMood(userMood);
    };

    const settings = {
        arrows: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        className: "slides"
    };

    const questions = () => {
        if (safety) {
            return (<h1>Thank you!</h1>)
        }
        else if (mood) {
            return (
                <>
                    <h1>How safe do you feel?</h1>
                    <br></br>
                    <div>
                        <button onClick={() => setSafety(1)}>1</button> under threat
                        <button onClick={() => setSafety(2)}>2</button> sketchy
                        <button onClick={() => setSafety(4)}>3</button> neutral
                        <button onClick={() => setSafety(4)}>4</button> safe
                        <button onClick={() => setSafety(5)}>5</button> exteremely safe
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <h1>How’s the vibe?</h1>
                    <br></br>
                    <Slider {...settings}>
                        <div>
                            <h1>😴</h1>
                            <br></br>
                            <button onClick={() => acceptUserMood("😴")}>Lame</button>
                        </div>
                        <div>
                            <h1>😎</h1>
                            <br></br>
                            <button onClick={() => acceptUserMood("😎")}>Chill</button>
                        </div>
                        <div>
                            <h1>🔥</h1>
                            <br></br>
                            <button onClick={() => acceptUserMood("🔥")}>Fun</button>
                        </div>
                    </Slider>
                </>
            )
        }
    }

    return (
        <div className="container is-fluid">
            {questions()}
        </div >
    );
};

export default Review;