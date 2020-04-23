import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = (props) => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");
  const [mostRecentSubmissionText, setMostRecentSubmissionText] = useState("")
  const [submissions, setSubmissions] = useState([])
  const [showComponent, setShowComponent] = useState(false)
  const createPoem = (poem) =>{
    const newSubmissions = [...submissions]
      newSubmissions.push({
        adjective1:poem.adjective1,
        noun1: poem.noun1,
        adverb: poem.adverb,
        verb: poem.verb,
        adjective2: poem.adjective2,
        noun2:poem.noun2 
      });
    setSubmissions(newSubmissions);
    setMostRecentSubmissionText("The Most Recent Submission")
  }

  const displayFinalPoem = () =>{
    setShowComponent(!showComponent);
  }
  
  return (
    <div className="Game">
      <h2>Game</h2>
      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>
      <p>Please follow the following format for your poetry submission:</p>
      <p className="Game__format-example">
        { exampleFormat }
      </p>
      {!showComponent && <RecentSubmission submissions = {submissions} mostRecentSubmissionText={mostRecentSubmissionText}/>}
      {!showComponent && <PlayerSubmissionForm onSubmitCallback = {createPoem}/>}
      {<FinalPoem submissions = {submissions} onClickCallback = {displayFinalPoem} showComponent = {showComponent}/>}
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
