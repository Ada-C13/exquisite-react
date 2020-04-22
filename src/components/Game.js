import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  const [currentField, setCurrentField] = useState('');
  const [allFields, setAllFields] = useState([]);
  const [displayPoem, setDisplayPoem] = useState(false);

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  const showSubmittedField = (fieldInput) => {
    
    const newField = Object.values(fieldInput).join(' ');
    setCurrentField(newField);

    const newFieldList = [...allFields];
    newFieldList.push(newField);
    setAllFields(newFieldList);
  }

  let poem = [];

  if (displayPoem === true) {
    poem = allFields;
  
    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        
        {/* <RecentSubmission fieldInput={ currentField }/> <--- shows last submitted line by user*/}

        <FinalPoem setFieldsPoem={ setDisplayPoem } poemLines={ poem }/>

      </div>
    );
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission fieldInput={ currentField }/>

      <PlayerSubmissionForm onCallbackField={ showSubmittedField } fields={FIELDS}/>

      <FinalPoem setFieldsPoem={ setDisplayPoem } poemLines={ poem }/>

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
