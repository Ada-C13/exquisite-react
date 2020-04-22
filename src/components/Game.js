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
  }).join(' ');

  const [poemList, setPoemList] = useState([]);
  const [player, setPlayer] = useState(1);
  const [finalPoemVisibility, setFinalPoemVisibility] = useState(false);
  const [recentLineVisibility, setRecentLineVisibility] = useState(true);

  const addPoem = (poem) => {
    let newPoemsList = [...poemList];

    //could pass in a string
    newPoemsList.push(poem);

    setPlayer(player + 1);

    setPoemList(newPoemsList);
  };

  const changeVisibilityFinalPoem = () => {
    if (finalPoemVisibility === false) {
      setFinalPoemVisibility(true);
    }
  };

  const changeVisibilityRecentLine = () => {
    if (recentLineVisibility === true) {
      setRecentLineVisibility(false);
    }
  };

  const onSubmitFinalPoem = (event) => {
    event.preventDefault();
    changeVisibilityFinalPoem();
    changeVisibilityRecentLine();
  };

  const poemListString = poemList.map((obj) => {
    return `The ${obj.adj1} ${obj.noun1} ${obj.adv} ${obj.verb} the ${obj.adj2} ${obj.noun2} .`;
  });

  return (
    <div className='Game'>
      <h2>Game</h2>

      <p>
        Each player should take turns filling out and submitting the form below.
        Each turn should be done individually and <em>in secret!</em> Take
        inspiration from the revealed recent submission. When all players are
        finished, click the final button on the bottom to reveal the entire
        poem.
      </p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className='Game__format-example'>{exampleFormat}</p>

      <RecentSubmission
        lastPoemLine={poemListString[poemListString.length - 1]}
        recentLineVisibility={recentLineVisibility}
      />

      <PlayerSubmissionForm
        fields={FIELDS}
        onSubmitCallBack={addPoem}
        player={player}
        recentLineVisibility={recentLineVisibility}
      />

      <FinalPoem
        poemList={poemListString}
        finalPoemVisibility={finalPoemVisibility}
        onSubmitFinalPoem={onSubmitFinalPoem}
      />
    </div>
  );
};

const FIELDS = [
  'The',
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
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
