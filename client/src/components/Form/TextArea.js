import React from "react";

export const TextArea = props => (
  <div className="field">
      <label className="label">{props.title}</label>
      <div className="control">
      <textarea className="textarea" name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder}></textarea>
    </div>
  </div>
);
