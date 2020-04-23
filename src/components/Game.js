import React, { useState } from "react";
import "./Game.css";
import PlayerSubmissionForm from "./PlayerSubmissionForm";
import FinalPoem from "./FinalPoem";
import RecentSubmission from "./RecentSubmission";

const Game = () => {
  const [currentSentence, nextSentence] = useState([]);
  const [submissions, setSubmissions] = useState(false);
  const [showPoem, changeShowPoem] = useState(true);

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  const showRecentSubmission = (sentence) => {
    const newSentenceList = [...currentSentence];

    newSentenceList.push(sentence);

    nextSentence(newSentenceList);
    setSubmissions(true);
  };

  const hidePlayerSubmissionForm = (value) => {
    changeShowPoem(value);
    setSubmissions(false);
  };

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>
        Each player should take turns filling out and submitting the form below.
        Each turn should be done individually and <em>in secret!</em> Take
        inspiration from the revealed recent submission. When all players are
        finished, click the final button on the bottom to reveal the entire
        poem.
      </p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">{exampleFormat}</p>

      {submissions && <RecentSubmission poem={currentSentence} />}

      {showPoem && (
        <PlayerSubmissionForm
          callbackSentenceForm={showRecentSubmission}
          player={currentSentence.length + 1}
        />
      )}

      <FinalPoem
        poem={currentSentence}
        onSubmitCallBack={hidePlayerSubmissionForm}
      />
    </div>
  );
};

const FIELDS = [
  "The",
  {
    key: "adj1",
    placeholder: "adjective",
  },
  {
    key: "noun1",
    placeholder: "noun",
  },
  {
    key: "adv",
    placeholder: "adverb",
  },
  {
    key: "verb",
    placeholder: "verb",
  },
  "the",
  {
    key: "adj2",
    placeholder: "adjective",
  },
  {
    key: "noun2",
    placeholder: "noun",
  },
  ".",
];

export default Game;
