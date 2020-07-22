import React from "react";
import '../../App.css';

export const Input = props => (
  <div className="field">
    <label className="label">{props.title}</label>
    <div className="control">
        <input type={props.type} className="input" name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
    </div>
  </div>
);
