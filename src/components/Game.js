import React, { useState } from "react";
import "./Game.css";
import PlayerSubmissionForm from "./PlayerSubmissionForm";
import FinalPoem from "./FinalPoem";
import RecentSubmission from "./RecentSubmission";

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [submissions, setSubmissions] = useState([]);
  const [revealBox, setRevealBox] = useState(true);

  const onSubmitCallBack = (box) => {
    // duplicate current submissions
    const newSubmissions = [...submissions];
    newSubmissions.push(box);
    // update the submissins
    setSubmissions(newSubmissions);
    setCurrentPlayer(currentPlayer + 1);
  };

  const recentSubmission = () => {
    const recentBox = submissions[submissions.length - 1];
    // submit only when it is not empty
    if (recentBox) {
      return `The ${recentBox.adj1} ${recentBox.noun1} ${recentBox.adv} ${recentBox.verb} the ${recentBox.adj2} ${recentBox.noun2}`;
    }
  };
  const onFinalPoem = (event) => {
    setRevealBox(false); // after the final line, then the box should dissapear
  };

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

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

      <RecentSubmission
        recentSubmission={recentSubmission()}
        revealBox={revealBox}
      />

      <PlayerSubmissionForm
        fields={FIELDS}
        currentPlayer={currentPlayer}
        onSubmitCallBack={onSubmitCallBack}
        revealBox={revealBox}
      />

      <FinalPoem
        onFinalPoem={onFinalPoem}
        submissions={submissions}
        revealBox={revealBox}
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
