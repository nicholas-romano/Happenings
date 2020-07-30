import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

const QuickReview = () => {

    const [mood, setMood] = React.useState();
    const [safety, setSafety] = React.useState();
    const [showModal, setShowModal] = React.useState("myclass");
    let newClass = `modal modal-full-screen modal-fx-3dFlipHorizontal ${showModal}`;
    console.log(mood)
    console.log(safety)


    const acceptUserMood = (userMood) => {
        setMood(userMood);
    };

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray", margin: 25 }}
                onClick={onClick}
            />
        );
    };

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray", margin: 25 }}
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
                        <button className="icon" onClick={() => setSafety(1)}>1</button> Threatened
                        <button className="icon" onClick={() => setSafety(2)}>2</button> Concverned
                        <button className="icon" onClick={() => setSafety(4)}>3</button> Neutral
                        <button className="icon" onClick={() => setSafety(4)}>4</button> Safe
                        <button className="icon" onClick={() => setSafety(5)}>5</button> Comfy
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
        <>
            <button class="button" onClick={() => setShowModal("is-active")}>Rate Mood</button>

            <div id="modal-3dFlipHorizontal-fs" class={newClass}>
                <div class="modal-content modal-card">
                    <section class="modal-card-body my-container">

                        <div >
                            {questions()}
                        </div >

                    </section>
                    <footer class="modal-card-foot">

                        <button onClick={() => setShowModal("")} class="modal-button-close button">Exit</button>

                    </footer>
                </div>
            </div>
        </>
    );
};

export default QuickReview;