import React from 'react';
import './App.css';
import Game from './components/Game.js';

const App = () => {
  return (
    <div className="App">
      <header className="App__header">
        <h1 className="App__title">Exquisite Corpse</h1>
        <p className="App__intro-text">
          Exquisite corpse, also known as exquisite cadaver (from the original French term cadavre exquis), is a method by which a collection of words or images is collectively assembled. Each collaborator adds to a composition in sequence, either by following a rule (e.g. "The adjective noun adverb verb the adjective noun." as in "The green duck sweetly sang the dreadful dirge.") or by being allowed to see only the end of what the previous person contributed.
        </p>
      </header>
      <Game />
    </div>
  );
}


export default App;

// As a player, I want to see only the most recent submission of poetry in the section "The Most Recent Submission" (RecentSubmission component), so that I can be inspired, just like the Dadaists were when they invented the original Exquisite Corpse game.
// As a player, I only want to see the "The Most Recent Submission" section if there has already been at least one submission.
// As players playing this game, we want a button to click to finalize our poem and reveal the entire final poem, so that we don't see the previous lines until we are finished.
// As players playing this game, we want to hide the Player Submission Form after the final poem has been revealed, so that we don't add any more lines after the game is over.
// As a player, I want the form text inputs to be light pink when they are blank, so I have a visual way of seeing that it's invalid when it's blank.
