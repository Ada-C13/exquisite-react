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

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      </section>

      {props.isPoemF ? props.composePoem() : revealBtn()}
    </div>
  );
}

export default FinalPoem;
