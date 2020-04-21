import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {

  const [submission,setSubmission] = useState({
    adjective:'',
    noun:'',
    adjective2:'',
    adverb:'',
    verb:'',
    noun2:'',
  });

  const onSubmit =(event) => {
    event.preventDefault();
    setSubmission({
      ...submission,
      adjective:event.target.adjective.value,
      noun:event.target.noun.value,
      adjective2:event.target.adjective2.value,
      adverb:event.target.adverb.value,
      verb:event.target.verb.value,
      noun2:event.target.noun2.value,
    });
    console.log(submission)
  };


  return (
    <div className="PlayerSubmissionForm" onSubmit={onSubmit}>
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          The <input
            name="adjective"
            placeholder="adjective"
            type="text"
            value="adjective"
            />
            <input
            name="noun"
            placeholder="noun"
            type="text"
            value="noun"
            />
            <input
            name="adverb"
            placeholder="adverb"
            type="text"
            value="adverb"
            />
            <input
            name="verb"
            placeholder="verb"
            type="text"
            value="verb"
            /> the
            <input
            name="adjective2"
            placeholder="adjective"
            type="text"
            value="adjective"
            />
          <input
            name="noun2"
            placeholder="noun"
            type="text" 
            value="noun"
            />.

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
