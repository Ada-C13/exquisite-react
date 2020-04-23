import React, { useState } from 'react';
import './FinalPoem.css';

const FinalPoem = props => {

  const handleFullPoem = () => {
    for (let i=0; i <= props.finalPoem.length; i++) {
     return <p>
        The {props.finalPoem[i][0]} {props.finalPoem[i][1]} {props.finalPoem[i][2]} {props.finalPoem[i][3]} the {props.finalPoem[i][4]} {props.finalPoem[i][5]}
      </p>
    }
  }


  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <p onClick={handleFullPoem}>{props.handleFullPoem}</p>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Full Poem" className="FinalPoem__reveal-btn"/>
      </div>
    </div>
  );
}

export default FinalPoem;
