import React, { useState } from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const finalPoem = props.sentences.map((sentence) => {
    return (
    <p>The {sentence.adjOne} {sentence.nounOne} {sentence.nounOne} {sentence.adverb} {sentence.verb} the {sentence.adjTwo} {sentence.nounTwo}.</p>
    )
  })

  // TODO in wave 3
  const onFinalClick = ( (event) => {
    event.preventDefault();
  })

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      {finalPoem}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input 
        type="button" 
        value="We are finished: Reveal the Poem"
        onClick={onFinalClick}
        className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
