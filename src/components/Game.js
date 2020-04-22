import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  const [sentenceList, saveSentenceList] = useState([])
  const [finalClick, setFinalClick] = useState(false)

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  const addSentences = ((sentence) => {
    
    const newSentenceList = [...sentenceList];

    const nextId = Math.max(newSentenceList.map((sentence) => sentence.id)) + 1;
    console.log(nextId)

    newSentenceList.push({
      ...sentence,
      id: nextId,
    })
    console.log(newSentenceList);
    saveSentenceList(newSentenceList);
    
  })

  const showFinalPoem = (() => {
    setFinalClick(true)
  }) 

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>
      {/* {formOrPoem()} */}
      {sentenceList.length === 0 ? '' : <RecentSubmission  recentSentence={sentenceList[sentenceList.length-1]}/>}

      <PlayerSubmissionForm sentences={sentenceList} onFormSubmitCallBack={addSentences}/>

      <FinalPoem 
        sentences={sentenceList} 
        onFinalClickCallBack={showFinalPoem}
        finalClick={finalClick}
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
