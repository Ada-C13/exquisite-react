import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  const [turnNumber, setTurnNumber] = useState(0)
  const [submissions, setSubmissions] = useState([])
  const [finalPoem, setFinalPoem] = useState([])
  
  const handleSubmit = (submit) => {
    setSubmissions([...submissions, submit])
    if (turnNumber === FIELDS.length) {
     setFinalPoem([...finalPoem, submissions])
     setTurnNumber(turnNumber === 0)
    } else {
      setTurnNumber(turnNumber >= FIELDS.length - 1 ? 0 : (turnNumber + 1))
    }; 
  };

  const handleClickLastSentence = () => {
    if (finalPoem.length > 0) {
      return finalPoem[finalPoem.length - 1]
    }
    return <div />
  };

  const handleClickAllSetences = () => {
    if (finalPoem.length > 0) {
      return finalPoem
    }
    return <div />
  }

  const placeholderText = () => {
    return FIELDS[turnNumber].placeholder
  };

  const renderRecentSubmissions = () => {
    if (submissions.length > 0) {
      return (<RecentSubmission submission={submissions[submissions.length - 1]} />)
    }
    return <div />
  };


  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="sentenceStructure">"The adjective noun adverb verb the adjective noun."</p>

      {renderRecentSubmissions()}

      <PlayerSubmissionForm 
        placeholderText={placeholderText()}
        turnNumber={turnNumber}
        handleSubmit={handleSubmit}
      />

      <FinalPoem 
        finalPoem={finalPoem}
        handleLastSentence={handleClickLastSentence}
        handleFullPoem={handleClickAllSetences} />

    </div>
  );
}


const FIELDS = [
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
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  }
];

export default Game;
