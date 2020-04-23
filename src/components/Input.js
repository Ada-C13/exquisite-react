import React from "react";

export default function Input({ className, value, ...otherProps }) {
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
}
