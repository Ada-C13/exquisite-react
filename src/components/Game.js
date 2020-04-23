import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';


const Game = () => {
  const inputFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");


  const [player, setPlayer] = useState(1);

  const incrementPlayer = (player) =>{
    const newPlayer = player + 1;
    setPlayer(newPlayer);
  }

  const [poemList, setPoemList] = useState([]);
  const [gameon, setGameOn]= useState(false)

  // const endGame = () => {(gameon? setGameOn(true) : setGameOn(false))}
  console.log(`this comes from game`, poemList[poemList.length-1]);


  const onPoemSubmit = () => {
    setGameOn(true)
  };

  const addPoem = (poem) => {

    const newPoemList = [...poemList];

    // Find the max id and add 1
    // const nextId = newPoemList.reduce((accumulator, currentPoem) => {
      // return Math.max(accumulator, currentPoem.id);
    //  }, 0) + 1;

    newPoemList.push({
      key: player,
      the1: "The",
      adj1: poem.adj1,
      noun1: poem.noun1,
      adv: poem.adv,
      verb: poem.verb,
      the2: "the",
      adj2: poem.adj2,
      noun2: poem.noun2,
      dot: "."
    });

    setPoemList(newPoemList);
    incrementPlayer(player);
    
    
  }
   

  const poems =  poemList.map((poem) => `${poem.the1} ${poem.adj1} ${poem.noun1} ${poem.adv} ${poem.verb} ${poem.the2} ${poem.adj2} ${poem.noun2}${poem.dot}`);
  
  console.log(`this comes from game`, poemList[poemList.length-1]);


  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

       <p className="Game__format-example">
        { inputFormat }
      </p>

      <RecentSubmission gameon={gameon} poem={poemList[poemList.length-1]}/>

      <PlayerSubmissionForm gameon={gameon} addPoemCallback={addPoem} player={player} fields={FIELDS}/>

      <FinalPoem poems={poems} gameon={gameon} onPoemSubmit={onPoemSubmit}/>

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
