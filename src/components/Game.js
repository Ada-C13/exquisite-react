import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const [savedLines, setSavedLines] = useState([]); // Track submitted lines so far.
  const [newestLine, setNewestLine] = useState(''); // Track newest line.
  const [gameCompletion, setGameCompletion] = useState(false); // Track game completion status.

  let playerNumber = 1;

  // Handle submission from the form.
  const saveLine = (submittedLine) => {
    const newSavedLines = [...savedLines];
    const newestLine = Object.values(submittedLine).join(' ') + '.';

    newSavedLines.push(newestLine); // Save line to collection.
    playerNumber++; // Update player number.

    setNewestLine(newestLine); // Update most recently submitted line.
    setSavedLines(newSavedLines); // Update lines submitted so far.
  };

  // Change game status.
  const isGameFinished = (status) => {
    setGameCompletion(status);
  };

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {newestLine !== '' && gameCompletion === false &&
        <RecentSubmission newestLine={ newestLine } />
      }

      {gameCompletion === false &&
        <PlayerSubmissionForm onFormSubmit={ saveLine } fields={ FIELDS } playerNumber={ playerNumber } />
      }
    
      <FinalPoem submittedLines={ savedLines } isGameFinished={ isGameFinished } />
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