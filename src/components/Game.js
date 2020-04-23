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

  const [submissions, setSubmissionList] = useState([])

  const addSubmission = (newSubmission) => {

    const newSubmissionList = [...submissions];

    newSubmissionList.push(newSubmission)
    setSubmissionList(newSubmissionList)
    console.log(newSubmissionList)

  };

  let mostRecentSubmissionSentence = ""

  if (submissions.length > 0){
    let mostRecentSubmission = submissions[submissions.length-1]
    mostRecentSubmissionSentence = "The " + mostRecentSubmission.adj1 + " " + mostRecentSubmission.noun1 + " " + mostRecentSubmission.adv + " " + mostRecentSubmission.verb + " the " + mostRecentSubmission.adj2 + " " + mostRecentSubmission.noun2 + "."
  }



  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission 
        mostRecentSubmission={mostRecentSubmissionSentence}
      />


      <PlayerSubmissionForm 
        fields={FIELDS} 
        onSubmitCallback={addSubmission} 
        playerNumber={submissions.length+1}
      />

      <FinalPoem 
        submissions={submissions}
        format={exampleFormat}
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
