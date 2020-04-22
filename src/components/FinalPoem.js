import React, { useState } from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const poemLine = props.poemList.map((line, index) => {
    return <p key={index}> {line} </p>;
  });

  const revealedPoem = (
    <section className='FinalPoem__poem'>
      <h3>Final Poem</h3>
      {poemLine}
    </section>
  );

  const revealPoemButton =  
    <div className='FinalPoem__reveal-btn-container'>
      <input
        type='button'
        value='We are finished: Reveal the Poem'
        onClick={props.onSubmitFinalPoem}
        className='FinalPoem__reveal-btn'
      />
  </div> 

  const content = props.finalPoemVisibility ? revealedPoem : revealPoemButton;

  return (
    <div className='FinalPoem'>

      {content}

    </div>
  );
};

export default FinalPoem;
