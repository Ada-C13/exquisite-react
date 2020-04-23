import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  
  // data of form submission, so that the Game component keeps track of all of the submissions.

  const [poemPiece, setPoemPiece] = useState([]);
  const [playing, setPlaying] = useState(true);

  // State to add up 1 to the next player. 
  const [player, setPlayer] = useState(1)

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  // Function to start over the game! Anytime
  const resetGame =()=> {
    setPoemPiece([]);
    setPlaying(true);
    setPlayer(1);
    console.log("resetig")
  }


  // CallBack func to get the info from the form. 
  const addPoemPiece= (poem)=> {

    const newPoemPiece = [...poemPiece];
    console.log(poem)

    newPoemPiece.push(poem)
    setPlayer(player + 1)
    setPoemPiece(newPoemPiece);
  }

  const gameOver =()=> {
    setPlaying(false);
  }

  return (
    <div className="Game">
      <h2>Game</h2>
      <div className="btn">
        <input onClick={resetGame} type="reset" value="Start Over" className="PlayerSubmissionForm__submit-btn" />
      </div>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>
      {/*   // playing={playing} */}
      <RecentSubmission 
        poems={poemPiece}
        {...{playing}}
      />

      <PlayerSubmissionForm 
        onFormSubmitCallback={addPoemPiece} 
        fields={FIELDS} 
        currentPlayer={player}
        {...{playing}}
      />

      <FinalPoem 
        poems={poemPiece}
        onGameOverCallback={gameOver}
        {...{playing}}
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
