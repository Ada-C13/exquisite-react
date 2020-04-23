import React from "react";

const Input = ({ value, ...otherProps }) => {
  //destructiring, spreading what is left
  return (
    <input
      className={`PlayerSubmissionForm__input--${
        value === "" ? "invalid" : "valid"
      }`}
      value={value}
      {...otherProps}
    />
  );
};

export default Input;
