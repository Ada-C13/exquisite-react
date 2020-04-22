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
  const [player, setPlayer] = useState(1);
  const [poems, setPoems] = useState([]);
  const [displayFullPoem, setDisplayFullPoem] = useState(false);
  const [displayPlayerForm, setDisplayPlayerForm] = useState(true);
  const [recent, setRecent] = useState([])
  const [displayRecent, setdisplayRecent] = useState(true);
  

  //callback function - this gets passed down to PlayerSubmission Form to use when the submit line button is clicked
  const addLine = (poem) => {

    const newPoemList = [...poems];
    const recent = []
    newPoemList.push(poem);
    recent.push(poem);
    
    setPoems(newPoemList);
    setPlayer(player + 1);
    setRecent(recent);
  }

  // toggles state to display the poem in FinalPoem
  const revealPoem = () => {
    if (poems.length >= 1) {
      setDisplayFullPoem(true);
      setDisplayPlayerForm(false);
      setdisplayRecent(false);
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

      <RecentSubmission recent={recent} displayRecent={displayRecent}/>

      <PlayerSubmissionForm player={player} addLineCallback={addLine} displayPlayerForm={displayPlayerForm}/>

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
