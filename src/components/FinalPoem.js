import React, { useState } from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const FinalPoemComponents = props.savedLines.map((line, i) => {
    return (
      <p key={i}>
        {line}
      </p>
    );
  });

  return (
    <div className="FinalPoem">
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
