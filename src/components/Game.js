import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [submissions, setSubmissions] = useState([]);
  const [gameOn, setGameOn] = useState(true);

  const updateSubmissions = (line) => {
    // copy current submissions
    const newSubmissions = [];

    submissions.forEach( (submission) => {
      newSubmissions.push(submission);
    })

    // add new line 
    newSubmissions.push(line);


    // update submissions state
    setSubmissions(newSubmissions); 

    // increase currentPlayer by 1
    setCurrentPlayer(currentPlayer + 1);
  }

  const updateGameStatus = (bool) =>{
    if(bool === false){
      setGameOn(!gameOn);
    }
  }

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      { gameOn && submissions.length >=1 ? <RecentSubmission mostRecentSub={submissions[submissions.length - 1]}/> : ""}

      {gameOn ? <PlayerSubmissionForm currentPlayer={currentPlayer} onSubmitCallback={updateSubmissions}/> : ""}

      <FinalPoem allSubmissions={submissions} onPoemFinishCallback={updateGameStatus} gameStatus={gameOn} />

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
