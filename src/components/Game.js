import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  // start player count at 1, poemList as empty array, and finalReveal bool as false
  const [player, setPlayer] = useState(1);
  const [poemList, setPoemList] = useState([]);
  const [finalReveal, setFinalReveal] = useState(false);

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  const addPoem = poem => {
    const newPoemList = [...poemList];
    newPoemList.push(poem);
    setPoemList(newPoemList);
    setPlayer(player + 1);
  }

  const onFinalSubmit = () => {
    setFinalReveal(true);
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <br></br>

      { poemList.length > 0 && !finalReveal &&
         <RecentSubmission lastPoem={poemList[poemList.length-1]}/>
      }

      {!finalReveal ? <PlayerSubmissionForm player={player} onSubmitCallback={addPoem}/> : ""}

      <FinalPoem poemList={poemList} onSubmitCallback={onFinalSubmit} finalReveal={finalReveal}/>

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