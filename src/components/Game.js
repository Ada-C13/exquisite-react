import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';
import PropTypes from 'prop-types';

const Game = () => {
  const [poemList, setPoemList] = useState([]);
  const [player, setPlayer] = useState(1);
  const [showFinal, setShowFinal] = useState(false);


  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  // callback function to add students to the list
  const addPoem = (poem) => {
    const newPoemList = [...poemList]; // copy PoemList
    

    const newLine = "The " + poem.adj1 + " " + poem.noun1 + " " + poem.adv + " " + poem.verb + " the " + poem.adj2 + " " + poem.noun2 + ".";

    newPoemList.push(newLine);
    setPoemList(newPoemList); 
    setPlayer(player + 1);
    };

    const finishedPoem = () => {
      setShowFinal(true);
    };

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {/* TODO add conditional logic to display only if finished poem is not true and player > 1 */}
      <RecentSubmission recentSubmission={poemList[poemList.length - 1]} />
    
      {/* TODO add conditional logic to display only if finished poem is not true and player > 1 */}
      <PlayerSubmissionForm player={player} onSubmit={addPoem} />

      <FinalPoem showFinal={showFinal} poemList={poemList} onFinalPoemSubmit={finishedPoem}/>

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
    placeholder: 'adv',
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
