import React, { useState } from 'react';
import './FinalPoem.css';

const FinalPoem = props => {

  const handleLastSentence = () => {
    return <div The {...props.finalPoem[0]} {...props.finalPoem[1]} {...props.finalPoem[2]} {...props.finalPoem[3]} the {...props.finalPoem[4]} {...props.finalPoem[5]} />
  }

  const handleFullPoem = () => {
    let i = 0
    let j = 0
    for (i=0; i <= props.length; i++) {
      return <div The {...props[i][j]} {...props[i][j+1]} {...props[i][j+2]} {...props[i][j+3]} the {...props[i][j+4]} {...props[i][j+5]} />
    }
  }


  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="Reveal the Last Setence" classBane="FinalPoem__reveal-btn" onClick={handleLastSentence()}/>
        <input type="button" value="We are finished: Reveal the Full Poem" className="FinalPoem__reveal-btn" onClick={handleFullPoem()}/>
      </div>
    </div>
  );
}

export default FinalPoem;
