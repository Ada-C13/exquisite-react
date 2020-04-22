import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const [submissionData, setSubmissionData] = useState([]);
  const [finishPoem, setFinishPoem] = useState(false);

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  const addSubmissionData = (newData) => {
    // const submissionDataList = [...submissionData];
    // submissionDataList.push(newData);
    // setSubmissionData(submissionDataList);

    setSubmissionData([...submissionData, newData]);
  }

  const formatLine = (singleLineData) => {
    const partOne = Object.values(singleLineData).slice(0,4).join(" ");
    const partTwo = Object.values(singleLineData).slice(4).join(" ");
    const fullLine = `The ${partOne} the ${partTwo}.`

    return fullLine;
  }

  const composePoem = () => {
    const poem = submissionData.map((singleData) => {
      return <p>{formatLine(singleData)}</p>
    });

    return poem;
  }

  const constructPoem = () => {
    if (finishPoem) {
      return null;
    }

    return (
      <div>
        <RecentSubmission recentlySubmitted={submissionData[submissionData.length - 1]} formatLineCallback={formatLine}/>

        <PlayerSubmissionForm addSubmissionDataCallback={addSubmissionData} />
      </div>
    );
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        {exampleFormat}
      </p>

      {constructPoem()}

      <FinalPoem composePoem={composePoem} composeFn={() => setFinishPoem(true)} isRevealed={finishPoem} />

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
