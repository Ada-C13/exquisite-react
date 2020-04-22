import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  const poemLines = props.poem.map((line) => {
    return <p>{line}</p>
  });

  let poem = null;
  let button = (
    <div className="FinalPoem__reveal-btn-container">
      <input 
        type="button" 
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn"
        onClick={props.onClickCallback} 
      />
    </div>
  );

  if (props.inProgress === "no") {
    button = null;
    poem = (
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {poemLines}
      </section>
    );
  }

  return (
    <div className="FinalPoem">
      {poem}
      {button}
    </div>
  )
};

FinalPoem.propTypes = {
  poem: PropTypes.array.isRequired,
  inProgress: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired
};

export default FinalPoem;
