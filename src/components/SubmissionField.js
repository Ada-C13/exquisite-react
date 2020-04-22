import React from "react"



const SubmissionField = (props) => {
  return <input 
      className={props.className}
      name={props.name}
      placeholder={props.placeholder}
      type="text" 
      onChange={props.onChangeHandler}
      onClick={props.onChangeHandler}
    />
}

export default SubmissionField