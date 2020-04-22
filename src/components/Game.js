import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const [poem, setPoem] = useState([])
  const [player, setPlayer] = useState(1)
  const [gameOn, setGameOn] = useState(true)

  const onSubmitFormClickCallback = (line) => {
    const newPoem = [...poem];
    const {adj1, noun1, adv, verb, adj2, noun2} = line;
    newPoem.push(`The ${adj1} ${noun1} ${adv} ${verb} the ${adj2} ${noun2}`)
    // newPoem.push(Object.values(line).join(" "));
    setPoem(newPoem);
    console.log(newPoem);
    const newPlayer = player + 1
    setPlayer(newPlayer);
  }

  const onFinishPoem = () => {
    setGameOn(false);
  };

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  const lastLine = () => {
    if (poem.length === 0 ) {
      return "";
    }

    return poem[poem.length - 1];
  };

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission isDone={!gameOn} lastLine={lastLine()}/>

      <PlayerSubmissionForm player={player} onClickCallback={onSubmitFormClickCallback}/>

      <FinalPoem isDone={!gameOn} poem={poem} onClickCallback={onFinishPoem}/>

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
