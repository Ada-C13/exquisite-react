import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PlayerSubmissionForm.css";

const PlayerSubmissionForm = (props) => {
  const [box, setBox] = useState({
    // the form has the following:
    adj1: "",
    noun1: "",
    adv: "",
    verb: "",
    adj2: "",
    noun2: "",
  });

  const onInputChange = (event) => {
    // dubplicate the form for new user
    const newBoxField = {
      ...box,
    };
    newBoxField[event.target.name] = event.target.value;
    setBox(newBoxField);
  };

  const onBoxSubmit = (event) => {
    event.preventDefault();
    console.log("submitting a poem");
    // send submisstion back to Game.js
    props.onSubmitCallBack(box);

    setBox({
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: "",
    });
  };
  // hide the submission form
  const showForm = () => {
    if (props.revealBox) {
      return (
        <div className="PlayerSubmissionForm">
          <h3>Player Submission Form for Player #{props.currentPlayer}</h3>
          <form onSubmit={onBoxSubmit} className="PlayerSubmissionForm__form">
            <div className="PlayerSubmissionForm__poem-inputs">
              <p>The</p>
              <input
                className={
                  box.adj1 ? null : "PlayerSubmissionFormt__input--invalid"
                }
                name={props.fields[1].key}
                onChange={onInputChange}
                value={box.adj1}
                placeholder={props.fields[1].placeholder}
                type="text"
              />

              <input
                className={
                  box.noun1 ? null : "PlayerSubmissionFormt__input--invalid"
                }
                name={props.fields[2].key}
                onChange={onInputChange}
                value={box.noun1}
                placeholder={props.fields[2].placeholder}
                type="text"
              />

              <input
                className={
                  box.adv ? null : "PlayerSubmissionFormt__input--invalid"
                }
                name={props.fields[3].key}
                onChange={onInputChange}
                value={box.adv}
                placeholder={props.fields[3].placeholder}
                type="text"
              />

              <input
                className={
                  box.verb ? null : "PlayerSubmissionFormt__input--invalid"
                }
                name={props.fields[4].key}
                onChange={onInputChange}
                value={box.verb}
                placeholder={props.fields[4].placeholder}
                type="text"
              />
              <p>the</p>

              <input
                className={
                  box.adj2 ? null : "PlayerSubmissionFormt__input--invalid"
                }
                name={props.fields[6].key}
                onChange={onInputChange}
                value={box.adj2}
                placeholder={props.fields[6].placeholder}
                type="text"
              />
              <input
                className={
                  box.noun2 ? null : "PlayerSubmissionFormt__input--invalid"
                }
                name={props.fields[7].key}
                onChange={onInputChange}
                value={box.noun2}
                placeholder={props.fields[7].placeholder}
                type="text"
              />
              <p>.</p>
            </div>

            <div className="PlayerSubmissionForm__submit">
              <input
                type="submit"
                value="Submit Line"
                className="PlayerSubmissionForm__submit-btn"
              />
            </div>
          </form>
        </div>
      );
    }
  };

  return <div>{showForm()}</div>;
};

PlayerSubmissionForm.propTypes = {
  currentPlayer: PropTypes.number.isRequired,
  fields: PropTypes.array.isRequired,
  onSubmitCallBack: PropTypes.func.isRequired,
  revealBox: PropTypes.bool.isRequired,
};

export default PlayerSubmissionForm;
