import React from "react";
import '../../App.css';

const Input = props => {

  const {
    title,
    type,
    name,
    placeholder,
    value,
    setFormObject,
    formObject
  } = props;

  return (
    <div className="field">
      <label className="label">{title}</label>
      <div className="control">
          <input 
            type={type}
            className="input" 
            name={name}
            defaultValue={value}
            onChange={e => setFormObject({...formObject, [name]: e.target.value})}
            placeholder={placeholder}
          />
      </div>
                          
    </div>
  )
};

export default Input;