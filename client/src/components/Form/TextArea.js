import React from "react";

export const TextArea = props => {

  const {
    title,
    name,
    value,
    register,
    errors,
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
          ref={register({minLength: 2, pattern: /^[-'"_\w\s!@#$%^&*]+$/})}
        >
        </textarea>
      </div>
      {errors[name] && errors[name].type === "minLength" && 
          (<p className="error">{title} field must be at least 2 characters.</p>)
      }
      {errors[name] && errors[name].type === "pattern" && 
          (<p className="error">{title} contains invalid characters.</p>)
      }                        
    </div>
  );
};
