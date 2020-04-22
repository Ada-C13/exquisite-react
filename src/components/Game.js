import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  const [poem, setPoemArray] = useState([]);

  const addLine = (line) => {
    poem.push(Object.values(line).join(' '));
    setPoemArray(poem);
    addPlayer()
  };

  // State for player count
  const [count, setCount] = useState(1);

  const addPlayer = () => {
    setCount(count + 1)
  };

  const [revealPoem, setRevealPoem] = useState(false);

  const onFinalPoemClick = () => {
    if (poem.length > 0) {
    setRevealPoem(true);
    };
  };

  const header = (
    <div>
      <h2>Game</h2>
      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>
      <p>Please follow the following format for your poetry submission:</p>
      <p className="Game__format-example">
        {exampleFormat}
      </p>
    </div>
  );

  const finalPoem = (
    <FinalPoem poem={poem} onFinalPoemClick={onFinalPoemClick} revealPoem={revealPoem} />
  );

  if (revealPoem) {
    return (
      <div className="Game">
        {header}
        {finalPoem}
      </div>
    );
  } else {
    return (
      <div className="Game">
        {header}
        <div>{poem.length > 0 && <RecentSubmission line={poem[poem.length - 1]} />}
        </div>
        <PlayerSubmissionForm fields={FIELDS} onSubmitCallback={addLine} count={count} />
        {finalPoem}
      </div>
    );
  };
};

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