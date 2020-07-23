import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

const QuickReview = () => {

    const [mood, setMood] = React.useState();
    console.log(mood)
    const [safety, setSafety] = React.useState();
    console.log(safety)

    const acceptUserMood = (userMood) => {
        setMood(userMood);
    };

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray" }}
                onClick={onClick}
            />
        );
    };

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        className: "center",
        centerMode: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        // adaptiveHeight: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
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
                        <button className="icon" onClick={() => setSafety(1)}>1</button> threatened
                        <button className="icon" onClick={() => setSafety(2)}>2</button> sketchy
                        <button className="icon" onClick={() => setSafety(4)}>3</button> neutral
                        <button className="icon" onClick={() => setSafety(4)}>4</button> safe
                        <button className="icon" onClick={() => setSafety(5)}>5</button> comfy
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
                            <h1 className="emojies">😴</h1>
                            <br></br>
                            <button className="button btn" onClick={() => acceptUserMood("😴")}>Lame</button>
                        </div>
                        <div>
                            <h1 className="emojies">😎</h1>
                            <br></br>
                            <button className="button btn" onClick={() => acceptUserMood("😎")}>Chill</button>
                        </div>
                        <div>
                            <h1 className="emojies">🔥</h1>
                            <br></br>
                            <button className="button btn" onClick={() => acceptUserMood("🔥")}>Fun</button>
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

export default QuickReview;