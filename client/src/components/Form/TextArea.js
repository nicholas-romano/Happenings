import React from "react";

export const TextArea = props => {

  const {
    title,
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
        <textarea 
          className="textarea" 
          name={name} 
          defaultValue={value}
          onChange={e => setFormObject({...formObject, [name]: e.target.value})}
          placeholder={placeholder}
        >
        </textarea>
      </div>        
    </div>
  );
};
