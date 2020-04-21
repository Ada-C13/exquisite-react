import React, { useState } from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const onPoemReveal = (event) => {
    event.preventDefault();

    props.setReveal(true);
  }

  const FinalPoemComponents = props.savedLines.map((line, i) => {
    return (
      <p key={i}>
        {line}
      </p>
    );
  });
  
  return (
    <div className="FinalPoem" onClick={onPoemReveal}>
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {FinalPoemComponents}
      </section>

      <div className="FinalPoem__reveal-btn-container" >
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn"/>
      </div>
    </div>
  );
};

export default FinalPoem;
