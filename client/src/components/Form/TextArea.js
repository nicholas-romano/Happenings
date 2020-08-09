import React from "react";

export const TextArea = props => {

  const {
    title,
    name,
    placeholder,
    inputRef
  } = props;

  return (
    <div className="field">
        <label className="label">{title}</label>
        <div className="control">
        <textarea 
          className="textarea" 
          name={name} 
          defaultValue=""
          placeholder={placeholder}
          ref={inputRef}
        >
        </textarea>
      </div>        
    </div>
  );
};
