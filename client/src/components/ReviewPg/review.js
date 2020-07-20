import React from "react"
import "./style.css"


const Review = () => {


    let styles;

    const displayModal = () => {

        styles = {
            display: "block"
        };
        alert("hit")
        console.log(styles)
    }

    const removeModal = () => {
        styles = {
            display: "none"
        }
    }



    return (
        <>
            <button className="button" onClick={displayModal()}>bbbb</button>

            <div class="modal" style={styles}>
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">How's the vibe?</p>
                        <button class="delete" aria-label="close" onClick={removeModal()}></button>
                    </header>
                    <section class="section">
                        <div class="container">
                            1
				<div id="carousel-demo" class="carousel">
                                <div class="item-1">
                                    2
					</div>
                                <div class="item-2">
                                    3
					</div>
                                <div class="item-3">
                                    4
					</div>
                            </div>
                           end
			</div>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-success">Save changes</button>
                        <button class="button">Cancel</button>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Review;