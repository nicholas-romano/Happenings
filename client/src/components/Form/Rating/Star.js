import React from "react";

export const Star = props => (
    <span onClick={() => props.handleRatingChange(props.star)}>{props.getStar(props.star)}</span>
);