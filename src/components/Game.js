import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const poems = [{
  firstAdjective: '',
  firstNoun: '',
  adverb: '',
  verb: '',
  secondAdjective:'',
  secondNoun: '',
}]

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  console.log()

  const [poemSubmissions, setPoemList] = useState(poems);

  const addPoem = (poem) => {
    console.log(poem)

    const newPoemList = [...poemSubmissions];

    newPoemList.push({
      firstAdjective: poem.firstAdjective,
      firstNoun: poem.firstNoun,
      adverb: poem.adverb,
      verb: poem.verb,
      secondAdjective: poem.secondAdjective,
      secondNoun: poem.secondNoun,
    });

    setPoemList(newPoemList);
  };
  
  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>
      <RecentSubmission poem = {poemSubmissions[poemSubmissions.length-1]} />
      <PlayerSubmissionForm onCallBackPoem = {addPoem}/>
  
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
