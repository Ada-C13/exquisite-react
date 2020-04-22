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

  const [poems,setPoem] = useState([]);
  const [playerNum, setPlayerNum] = useState(1);
  const [recentPoem,setRecent] = useState("");
  const [isFinish, setFinish] = useState(false);


  const addPoems = (poem) => {
    
    let nextId = 0;
    if(poems.length === 0 ){
      nextId = 1;
    }
    else {
      nextId= Math.max(...poems.map( eachpoem => eachpoem.id )) + 1 ;
    };

    poems.push({
      ...poem,
      id:nextId,
      adj1:poem.adj1,
      noun1:poem.noun1,
      adv:poem.adv,
      verb:poem.verb,
      adj2:poem.adj2,
      noun2:poem.noun2,

    });
    
     setPoem(poems);
     setPlayerNum(nextId+1);
     setRecent(poems[poems.length -1 ]);
  };

  const finishPoem = () => {
    setFinish(true);
    console.log(isFinish);
  };


  if (recentPoem === "" && isFinish === false){
    return (
      <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <PlayerSubmissionForm onSubmitCallBack={addPoems} onPlayer={playerNum}/>

      <FinalPoem poems = {poems} onSubmitCallBack={finishPoem}/>

    </div>
    );
  }
  else if (recentPoem !== "" && isFinish === false ){
    return (
      <div className="Game">
        <h2>Game</h2>
  
        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>
  
        <p>Please follow the following format for your poetry submission:</p>
  
        <p className="Game__format-example">
          { exampleFormat }
        </p>
  
        <RecentSubmission recentPoem ={recentPoem}/>
  
        <PlayerSubmissionForm onSubmitCallBack={addPoems} onPlayer={playerNum}/>
  
        <FinalPoem poems = {poems} onSubmitCallBack={finishPoem}/>
  
      </div>
    );
  }
  else if (isFinish === true) {
    return(
      <div className="Game">
        <h2>Game</h2>
  
        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>
  
        <p>Please follow the following format for your poetry submission:</p>
  
        <p className="Game__format-example">
          { exampleFormat }
        </p>
  
        <FinalPoem poems = {poems} onSubmitCallBack={finishPoem}/>
  
      </div>
    );
  };
};


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
  "."
];

export default Game;
