import React from 'react';
import PropTypes from 'prop-types';
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

FinalPoem.propTypes = {
  composeFn: PropTypes.func.isRequired,
  isRevealed: PropTypes.bool.isRequired,
  composePoem: PropTypes.func.isRequired,
}

export default FinalPoem;
