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

  // Game.js keeps track of state
  // all the hooks/useState organized here
  const [poemLines, setPoemLines] = useState([]);
  const [showRecentSubmission, setShowRecentSubmission] = useState(false);
  const [showPlayerSubmissionForm, setShowPlayerSubmissionForm] = useState(true);

  // use this example
  // const addStudent = (student) => {
  // Duplicate the student list.
  // const newStudentList = [...students];
  const addPoemLine = (poem) => {
    const newPoemLines = [...poemLines];

    newPoemLines.push(poem);

    setPoemLines(newPoemLines);
    setShowRecentSubmission(true);
  }

  const hidePlayerSubmissionForm = (value) => {
    setShowPlayerSubmissionForm(value);
    setShowRecentSubmission(false);
  }

    
  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {/* figured out how to write the next two lines with && by looking at classmates' code */}
      {showRecentSubmission && <RecentSubmission poem={poemLines}/>}
      {/* define currentPlayerId here - got idea from Chris' video where he did student_id */}
      {showPlayerSubmissionForm && <PlayerSubmissionForm onSubmitCallBack={addPoemLine} currentPlayerId={poemLines.length + 1}/>}

      <FinalPoem poem={poemLines} onSubmitCallBack={hidePlayerSubmissionForm}/>

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