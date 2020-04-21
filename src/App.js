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


// As a player, I want to be able to see placeholder text in each text input that describes what kind of word I should fill in.

// As a player who is going after the first player, I want to be able to have a cleared, reset form with no text in the input elements after the first player submitted, so that I can enter in my own submission easily.

