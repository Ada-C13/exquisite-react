import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';


const PlayerSubmissionForm = (props) => {

  const [submission,setSubmission] = useState({
    adj1:'',
    noun1:'',
    adv:'',
    verb:'',
    adj2:'',
    noun2:'',
  });

  const onInputChange = (event) => {
    const newFormFields = {
      ...submission,
    };
    newFormFields[event.target.name] = event.target.value;
    setSubmission(newFormFields);
  };

  const onSubmit =(event) => {
    event.preventDefault();
    props.onSubmitCallBack(submission);

    if(submission.adj1!=='' || submission.noun1 !== '' || submission.adv !=='' || submission.verb !== '' || submission.adj2 !== '' || submission.noun2 !== ''){
      setSubmission({
        adj1:'',
        noun1:'',
        adv:'',
        verb:'',
        adj2:'',
        noun2:'',
      });
    };
  };

  const fieldValid =(input) => {
    return input.match(/.+/);
  };


  return (
    <div className="PlayerSubmissionForm" onSubmit={onSubmit}>
      <h3>Player Submission Form for Player #{ props.onPlayer }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          The <input
            className={`PlayerSubmissionFormt__input${fieldValid(submission.adj1)? "" : "--invalid"}`}
            onChange={onInputChange}
            name="adj1"
            placeholder="adjective"
            type="text"
            value={submission.adj1}
            />
            <input
            className={`PlayerSubmissionFormt__input${fieldValid(submission.noun1)? "" : "--invalid"}`}
            onChange={onInputChange}
            name="noun1"
            placeholder="noun"
            type="text"
            value={submission.noun1}
            />
            <input
            className={`PlayerSubmissionFormt__input${fieldValid(submission.adv)? "" : "--invalid"}`}
            onChange={onInputChange}
            name="adv"
            placeholder="adverb"
            type="text"
            value={submission.adv}
            />
            <input
            className={`PlayerSubmissionFormt__input${fieldValid(submission.verb)? "" : "--invalid"}`}
            onChange={onInputChange}
            name="verb"
            placeholder="verb"
            type="text"
            value={submission.verb}
            /> the
            <input
            className={`PlayerSubmissionFormt__input${fieldValid(submission.adj2)? "" : "--invalid"}`}
            onChange={onInputChange}
            name="adj2"
            placeholder="adjective"
            type="text"
            value={submission.adj2}
            />
          <input
            className={`PlayerSubmissionFormt__input${fieldValid(submission.noun2)? "" : "--invalid"}`}
            onChange={onInputChange}
            name="noun2"
            placeholder="noun"
            type="text" 
            value={submission.noun2}
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
