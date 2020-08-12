import React from "react";
import '../../App.css';

const Input = props => {

  const {
    title,
    type,
    name,
    placeholder,
    inputRef
  } = props;

  return (
    <div className="field">
      <label className="label">{title}</label>
      <div className="control">
          <input 
            type={type}
            className="input" 
            name={name}
            defaultValue=""
            ref={inputRef}
            placeholder={placeholder}
          />
      </div>
                          
    </div>
  )
};

export default Input;