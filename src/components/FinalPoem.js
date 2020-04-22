import React, { useState } from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  const onButtonClick = () => {
    console.log("props.poem", props.poem)
    displayPoem(props.poem)
    // onFinalClick();
    props.onFinalPoemClick();
  };

  let finalPoem;
  const displayPoem = (poem) => {
    // for (let line of poem) {
    //   finalPoem += line;
    // };
    finalPoem = poem;
  };

  if (props.condition) {
  return (
  <div className="FinalPoem">
      <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      <p>{finalPoem}</p>
      </section>
    <div className="FinalPoem__reveal-btn-container" >
      <input 
        type="button" 
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn" 
        onClick={onButtonClick}
      />
    </div>
  </div>
  );
  } else {
    return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      <p>{finalPoem}</p>
      </section>
    </div>
    );
  };
};

FinalPoem.propTypes = {
  poem: PropTypes.array,
  onFinalPoemClick: PropTypes.func.isRequired,
}

export default FinalPoem;
