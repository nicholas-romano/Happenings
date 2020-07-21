import React from "react";
import '../../App.css';

export const Input = props => (
  <div className="field">
    <label className="label">{props.title}</label>
    <div className="control">
        <input type="text" className="input" name={props.name} onChange={props.onChange} placeholder={props.placeholder} />
    </div>
  </div>
);
