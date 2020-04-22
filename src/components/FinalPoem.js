import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const revealBtn = () => {
    return (
      <div className="FinalPoem__reveal-btn-container">
        <input
          type="button"
          value="We are finished: Reveal the Poem"
          className="FinalPoem__reveal-btn"
          onClick={props.composeFn}
        />
      </div>
    )
  }

  const poemHeader = () => {
    return (
      <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      </section>
    )
  }

  return (
    <div className="FinalPoem">
      {props.isRevealed ? poemHeader() : null}
      {props.isRevealed ? props.composePoem() : revealBtn()}
    </div>
  );
}

export default FinalPoem;
