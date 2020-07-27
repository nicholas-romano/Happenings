import React from "react";

export const TextArea = props => {

  const {
    title,
    name,
    value,
    placeholder,
    onChange
  } = props;

  return (
    <div className="field">
        <label className="label">{title}</label>
        <div className="control">
        <textarea 
          className="textarea" 
          name={name} 
          value={value} 
          onChange={onChange} 
          placeholder={placeholder}
        >
        </textarea>
      </div>        
    </div>
  );
};
