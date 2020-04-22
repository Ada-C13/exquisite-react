import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

// const poemLines = [];
// let playerNum = 1
let recent = ""

const Game = () => {
  const [poemList, setPoemList] = useState([])
  const [player, setPlayer] = useState(1)

  // const recentCall = () => {
  //   if (player > 1){
  //     const recentFormat = poemList[player -1].map((field) => {
  //         return field
  //     }).join(" ");
  //   }else {
  //     return (" ")
  //   }
  // }

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  const addLine = (line) => {
    const newPoemList = [...poemList];
    // const nextId = Math.max(...newPoemList.map ((student) => student.id)) + 1
    newPoemList.push({ ...line
      // id: nextId,
      // the1: 'The',
      // adj1: line.adj1,
      // noun1: line.noun1,
      // adv: line.adv,
      // verb: line.verb,
      // the2: 'the',
      // adj2: line.adj2,
      // noun2: line.noun2,
    });

    setPoemList(newPoemList);
    
    setPlayer(player + 1)

    console.log(line)

    recent = (Object.values(line)).join(" ");
    console.log(recent)
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

      <FinalPoem />

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
