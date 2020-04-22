import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  // created an emptyForm constant
  const emptyForm = {
    adj1:  '',
    noun1: '',
    adv:   '',
    verb:  '',
    adj2:  '',
    noun2: '',
  };

  // created the hook for formFields
  const [formFields, setFormFields] = useState(emptyForm);

  // created onChange events for each
  // field event.target.value calling event
  const onAdj1Change = (event) => {
    console.log(`Adj1 Field updated ${ event.target.value }`);
    setFormFields({
      ...formFields,
      adj1: event.target.value,
    });
  };

  const onNoun1Change = (event) => {
    console.log(`Noun1 Field updated ${ event.target.value }`);
    setFormFields({
      ...formFields,
      noun1: event.target.value,
    });
  };

  const onAdvChange = (event) => {
    console.log(`Adv Field updated ${ event.target.value }`);
    setFormFields({
      ...formFields,
      adv: event.target.value,
    });
  };

  const onVerbChange = (event) => {
    console.log(`Verb Field updated ${ event.target.value }`);
    setFormFields({
      ...formFields,
      verb: event.target.value,
    });
  };

  const onAdj2Change = (event) => {
    console.log(`Adj2 Field updated ${ event.target.value }`);
    setFormFields({
      ...formFields,
      adj2: event.target.value,
    });
  };

  const onNoun2Change = (event) => {
    console.log(`Noun2 Field updated ${ event.target.value }`);
    setFormFields({
      ...formFields,
      noun2: event.target.value,
    });
  };

  const inputClass = (input) => {

    if (input === ""){
      return "PlayerSubmissionFormt__input--invalid";
    } else {
      return "PlayerSubmissionFormt__input--valid";
    }

  }

  // created onSubmit event for the form when user clicks submit
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(`Form submitted`, formFields);
    props.onFormSubmit(formFields);
    setFormFields(emptyForm);
  }

  if (props.isFinal){

    return (
      <div className="PlayerSubmissionForm">
      </div>
    )

  } else {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player # {props.player}</h3>
        <form className="PlayerSubmissionForm__form" onSubmit={onSubmit}>

          {/* hard coded text input with events */}
          <div className="PlayerSubmissionForm__poem-inputs">
            <p>The &nbsp;
            <input
              name="adj1"
              className={inputClass(formFields.adj1)}
              onChange={onAdj1Change}
              value={formFields.adj1}
              placeholder="adjective"
              type="text" />
            &nbsp;

            <input
              name="noun1"
              className={inputClass(formFields.noun1)}
              onChange={onNoun1Change}
              value={formFields.noun1}
              placeholder="noun"
              type="text" />
            &nbsp;

            <input
              name="adv"
              className={inputClass(formFields.adv)}
              onChange={onAdvChange}
              value={formFields.adv}
              placeholder="adverb"
              type="text" />
            &nbsp;

            <input
              name="verb"
              className={inputClass(formFields.verb)}
              onChange={onVerbChange}
              value={formFields.verb}
              placeholder="verb"
              type="text" />
            &nbsp;

            the &nbsp;

            <input
              name="adj2"
              className={inputClass(formFields.adj2)}
              onChange={onAdj2Change}
              value={formFields.adj2}
              placeholder="adjective"
              type="text" />
            &nbsp;

            <input
              name="noun2"
              className={inputClass(formFields.noun2)}
              onChange={onNoun2Change}
              value={formFields.noun2}
              placeholder="noun"
              type="text" />
            </p>

            {/* The adjective noun adverb verb the adjective noun. */}
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>

        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;