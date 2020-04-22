import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    return field.key ? field.placeholder : field;
  }).join(" ")

  const initialFormState = () => {
    return {adj1:'', noun1: '', adv: '', verb: '', adj2: '', noun2: ''};
  }

  const [formFields, setFormFields] = useState(initialFormState);
  const [lastSubmit, setLastSubmit] = useState();
  const [allSubmissions, setAllSubmissions] = useState([]);
  const [showPoem, setShowPoem] = useState(false);
  const [showForm, setForm] = useState(true);
  const [playerNum, setPlayerNum] = useState(1);

  const onChangeHandler = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value
    });
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    const sentence = [
      "The",
      formFields.adj1,
      formFields.noun1,
      formFields.adv,
      formFields.verb,
      "the",
      formFields.adj2,
      formFields.noun2,
      "."
      ].join(" ");

    setFormFields(initialFormState);
    setLastSubmit(sentence);
    setAllSubmissions([...allSubmissions, sentence]);
    setPlayerNum(playerNum + 1);
    document.getElementById("testForm").reset();
  }

  const onShowPoem = (event) => {
    setShowPoem(true);
    setForm(false);
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission 
        lastSubmission={lastSubmit}
      />

      <PlayerSubmissionForm 
        fields={FIELDS}
        playerNum={playerNum}
        formFields={formFields}
        onChangeHandler={onChangeHandler}
        onSubmitForm={onSubmitForm}
        showForm={showForm}
      />

      <FinalPoem 
        allSubmissions={allSubmissions}
        onShowPoem={onShowPoem}
        showPoem={showPoem}
      />

    </div>
  );
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
