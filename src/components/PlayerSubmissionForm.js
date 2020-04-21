import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';


const PlayerSubmissionForm = (props) => {

  const [sentence, setSentence] = useState({
    adj1: '',
    noun1: '', 
    adv: '', 
    verb: '', 
    adj2: '',
    noun2: '',
  });

  const [player, nextPlayer] = useState(1);

  const onInput = (event) => {
    const newSentence = {
      ...sentence,
    }
    newSentence[event.target.name] = event.target.value;
    setSentence(newSentence);
  }

  const onSentenceSubmit = (event) => {
    event.preventDefault();
    //gets current sentence and passes back to Game
    props.callbackSentenceObject(sentence);
    //sets current sentence to empty string 
    setSentence({
        adj1: '',
        noun1: '', 
        adv: '', 
        verb: '', 
        adj2: '',
        noun2: '',
      })
      //sets player number 
    nextPlayer(player+1);
  }

  // used for empty input fields 
  const isEmpty = (name) => {
    return name === '';
  }

  return (
    <div className="PlayerSubmissionForm" onSubmit={onSentenceSubmit}>
      <h3>Player Submission Form for Player #{player}</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
   
        {props.fields.map((field, i) => {
          if (field.key){
            console.log(sentence[`${field.key}`]);
            return (
                <input key={`${i}`} name={`${field.key}`} placeholder= {`${field.placeholder}`} type="text" value={sentence[`${field.key}`]} onChange={onInput} className={isEmpty(sentence[`${field.key}`]) ? "empty" : "filled"}/>
            );
          }else{
            return field;
          }
        
        })}

        </div>
        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Sentence" className="PlayerSubmissionForm__submit-btn" /> {/* this type is a 'submit type */}
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  fields: PropTypes.object.isRequired,
  callbackSentenceObject: PropTypes.func.isRequired,
};


export default PlayerSubmissionForm;
