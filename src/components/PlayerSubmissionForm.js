import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';


const PlayerSubmissionForm = (props) => {

  const [submission,setSubmission] = useState({
    id:0,
    adj1:'',
    noun1:'',
    adv:'',
    verb:'',
    adj2:'',
    noun2:'',
  });

  const onSubmit =(event) => {
    event.preventDefault();
    setSubmission({
      ...submission,
      id:1,
      adj1:event.target.adj1.value,
      noun1:event.target.noun1.value,
      adv:event.target.adv.value,
      verb:event.target.verb.value,
      adj2:event.target.adj2.value,
      noun2:event.target.noun2.value,
    });
    console.log(submission);
    props.onSubmitCallBack(submission);
  };


  return (
    <div className="PlayerSubmissionForm" onSubmit={onSubmit}>
      <h3>Player Submission Form for Player #{ submission.id }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          The <input
            name="adj1"
            placeholder="adjective"
            type="text"
            value="adjective"
            />
            <input
            name="noun1"
            placeholder="noun"
            type="text"
            value="noun"
            />
            <input
            name="adv"
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
            name="adj2"
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

PlayerSubmissionForm.propTypes = {
  onSubmitCallBack: PropTypes.func.isRequired
};


export default PlayerSubmissionForm;
