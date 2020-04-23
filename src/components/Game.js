import React, { useState } from "react";
import "./Game.css";
import PlayerSubmissionForm from "./PlayerSubmissionForm";
import FinalPoem from "./FinalPoem";
import RecentSubmission from "./RecentSubmission";

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  const [listSubmissions, setListSubmissions] = useState([]);
  const [isGameOver, setGameOver] = useState(false);

  const onSubmitClick = (submission) => {
    const { adjective, noun, adverb, verb, adjectiveTwo, nounTwo } = submission;
    const newSubmissions = [...listSubmissions];
    const sentence = `The ${adjective} ${noun} ${adverb} ${verb} the ${adjectiveTwo} ${nounTwo}`;
    newSubmissions.push(sentence);
    setListSubmissions(newSubmissions);
    console.log(listSubmissions);
  };

  const onFinalClick = () => {
    setGameOver(true);
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

      {!isGameOver && (
        <>
          <RecentSubmission
            mostRecentSubmission={listSubmissions.slice(-1)}
            isGameOver={isGameOver}
          />

          <PlayerSubmissionForm
            playerNumber={listSubmissions.length + 1}
            onSubmitClick={onSubmitClick}
          />
        </>
      )}

      <FinalPoem
        finalList={listSubmissions}
        onFinalClick={onFinalClick}
        isGameOver={isGameOver}
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
