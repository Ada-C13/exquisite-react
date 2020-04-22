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

  // state for player turn tracking and full poem tracking
  // player is initialized at 1
  // poem is initialized as an empty array; objects can get shoved in there in the callback func
  const [player, setPlayer] = useState(1)
  const [poems, setPoems] = useState([])
  const [displayFullPoem, setDisplayFullPoem] = useState(false)
  

  //callback function - this gets passed down to PlayerSubmission Form to use when the submit line button is clicked
  const addLine = (poem) => {

    const newPoemList = [...poems];

    newPoemList.push(poem);
    
    setPoems(newPoemList);
    setPlayer(player + 1);
  }

  // toggles state to display the poem in FinalPoem
  const revealPoem = () => {
    if (poems.length > 1) {
      setDisplayFullPoem(true);
      //toggle display recent submission
      //toggle display playerform boxes
    }
  }


  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission />

      <PlayerSubmissionForm player={player} addLineCallback={addLine} />

      <FinalPoem poems={poems} displayFullPoem={displayFullPoem} onClickCallback={revealPoem}/>
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
