import React, { useState } from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  
  return (
    <div className="FinalPoem" >
      {props.gameon&& <section className="FinalPoem__poem" >
        <h3>Final Poem</h3>
        {props.poems.map ((poem)=> <p>{poem}</p>)}
      </section  >}
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.onPoemSubmit} />
      </div>
    </div>
  );
}

export default FinalPoem;
