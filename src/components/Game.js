import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

// const poemLines = [];
// let playerNum = 1
let recent = "";
let poemLines = [];

const Game = () => {
  const [poemList, setPoemList] = useState([]);
  const [player, setPlayer] = useState(1);

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  const addLine = (line) => {
    const newPoemList = [...poemList];
    newPoemList.push({ ...line
    });

    setPoemList(newPoemList);
    
    setPlayer(player + 1)

    recent = (Object.values(line)).join(" ");
    poemLines.push(recent);
    console.log(poemLines);
  }


  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission line={recent}/>

      <PlayerSubmissionForm onSubmitCallback={addLine} player={player} fields={FIELDS}/>

      <FinalPoem props={poemLines}/>

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
