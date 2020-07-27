import React from "react";
import '../../App.css';

export const Input = props => {

  const {
    title,
    name,
    type,
    value,
    register,
    errors,
    placeholder,
    onChange
  } = props;

    let pattern;
    let errMessage;

    switch(title) {
        case "Username":
            pattern = /^[-\w]+$/;
            errMessage = 'cannot contain special characters or spaces.';
        break;
        case "First Name":
        case "Last Name":
            pattern = /^[A-Za-z]+$/;
            errMessage = 'cannot contain special characters, numbers, or spaces.';
        break;
        case "Email":
            pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})$/;
            errMessage = 'invalid format';
        break;
        case "Password":
            pattern = /^[-\w!@#$%^&*]+$/;
            errMessage = 'invalid format';
        break;
    }

  return (
    <div className="field">
      <label className="label">{title}</label>
      <div className="control">
          <input 
            type={type} 
            className="input" 
            name={name} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder}
            ref={register({required: true, minLength: 2, pattern: pattern})}
          />
      </div>
      {errors[name] && errors[name].type === "required" && 
          (<p className="error">{title} field is required.</p>)
      }
      {errors[name] && errors[name].type === "minLength" && 
          (<p className="error">{title} field must be at least 2 characters.</p>)
      }
      {errors[name] && errors[name].type === "pattern" && 
          (<p className="error">{title} {errMessage}</p>)
      }                        
    </div>
  )
};
