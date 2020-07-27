import React from "react";
import '../../App.css';

const Email = props => {

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
          <input 
            type="email"
            className="input" 
            name={name} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder}
          />
      </div>                    
    </div>
  )
};

export default Email;