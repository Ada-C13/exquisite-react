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

  const [submissions, setSubmissions] = useState([]);
  const [player, setPlayer] = useState(1);
  const [reveal, setReveal] = useState(false);
  const [recentSub, setRecentSub] = useState({
    submission: '',
    show: false
  });

  const onSubmission = event => {
    const poemString = `The ${event.adjective1} ${event.noun1} ${event.adverb} ${event.verb} the ${event.adjective2} ${event.noun2}.`
    setSubmissions([...submissions, poemString]);
    setPlayer(prevPlayer => prevPlayer + 1);

    setRecentSub({
      submission: poemString,
      show: true
    });
  }

  const revealPoem = () => {
    setRecentSub({show: false});
    setReveal(true);
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>
      {recentSub.show ? <RecentSubmission mostRecent={recentSub}/>  : ''}

      {reveal ? '' : <PlayerSubmissionForm 
        addSubmissionCallback={onSubmission} 
        player={player}
      />}

      <FinalPoem 
        addRevealPoemCallBack={revealPoem} 
        poems={submissions} 
        reveal={reveal}
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
