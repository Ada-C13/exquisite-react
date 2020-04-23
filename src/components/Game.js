import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = (props) => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  const [mostRecent, setMostRecent] = useState('');
  const [finalPoem, setFinalPoem] = useState([]);
  const [isFinalPoemVisible, setIsFinalPoemVisible] = useState(false);

  const onSubmit = (sentence) => {
    // Store it in an all sentence array - located where? 
    // Store it in most recent submission var as a string
    setFinalPoem([...finalPoem, sentence]);
    setMostRecent(sentence);
  }


  const showFinalPoem = () => {
    setIsFinalPoemVisible(true);
  }

  // conditional rendering 
  // hide recent submission if there is none
  return (
    <div className="Game">
      <div className="Game">
      <h2>Game</h2>
      <p>
        Each player should take turns filling out and submitting the form below.
        Each turn should be done individually and <em>in secret!</em> 
        Take inspiration from the revealed recent submission. When all players are finished,
        click the final button on the bottom to reveal the entire poem.
      </p>
      <p>Please follow the following format for your poetry submission:</p>
      <p className="Game__format-example">
        { exampleFormat }
      </p>
      </div>
      {mostRecent && !isFinalPoemVisible && <RecentSubmission mostRecentSubmitted={mostRecent}/>}
      {!isFinalPoemVisible && <PlayerSubmissionForm fields={FIELDS} onSubmitCallback={onSubmit}/>}
      <FinalPoem 
        finalPoemSubmitted={finalPoem} 
        showFinalPoem={showFinalPoem}
        isFinalPoemVisible={isFinalPoemVisible}
      />
  </div>
  )
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
