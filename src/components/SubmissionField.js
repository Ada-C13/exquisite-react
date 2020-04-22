import React from "react"

const SubmissionField = (props) => {
  return <input 
      className={props.className}
      name={props.name}
      placeholder={props.placeholder}
      type="text" 
      value={props.value}
      onChange={props.onChangeHandler}
    />
}

export default SubmissionField