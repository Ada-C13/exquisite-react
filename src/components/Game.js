import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

    const [currentSentence, changeSentence] = useState('');

    const [allSentences, newSentences] = useState([]);

    const [showPoem, changeShowPoem] = useState(false);

  
    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    // getting new sentence from playerSubmissionForm object passed and displays using change sentence method
    // then adds new sentence to the sentences array to later display for poem 

    const displayRecentSubmission = (sentence) => {
      const newSentence = Object.values(sentence).join(' ');
      changeSentence(newSentence);
      const newSentenceList = [...allSentences];
      newSentenceList.push(newSentence);
      newSentences(newSentenceList);
    }

 
    //poem equals empty string until FinalPoem calls back changeShowPoem to display the poem
    let poem = [];
    
    if(showPoem === true){
      poem = allSentences;

      return (
        <div className="Game">
        <h2>Game</h2>
  
        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>
  
        <p>Please follow the following format for your poetry submission:</p>
  
        <p className="Game__format-example">
          { exampleFormat }
        </p>
  
        <RecentSubmission sentence={ currentSentence }/>
  
        <FinalPoem  setAllSentences={ changeShowPoem } poemLines={poem} />
  
      </div>
      );
    } 

    
    return (
      <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission sentence={ currentSentence }/>

      <PlayerSubmissionForm callbackSentenceObject={ displayRecentSubmission } fields={FIELDS}/>

      <FinalPoem  setAllSentences={ changeShowPoem } poemLines={poem} />

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
