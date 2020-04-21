import React from "react"

const SubmissionField = (props) => {
  return (
    <div>
      <input 
        name="adjectiveOne" 
        placeholder="adjective" 
        type="text" 
        onChange={props.onChangeHandler}
      />

      {/* <input name="nounOne" placeholder="noun" type="text" onChange={onChangeHandler}/>
      <input name="adverb" placeholder="adverb" type="text" onChange={onChangeHandler}/>
      <input name="verb" placeholder="verb" type="text" onChange={onChangeHandler}/>
      the 
      <input name="adjectiveTwo" placeholder="adjective" type="text" onChange={onChangeHandler}/>
      <input name="nounTwo" placeholder="noun" type="text" onChange={onChangeHandler}/> */}
      .

    </div>
  )
}



export default SubmissionField