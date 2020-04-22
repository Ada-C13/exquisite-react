import React from 'react';
import './FinalPoem.css';
import { render } from '@testing-library/react';

const FinalPoem = (props) => {

  const recitePoem = (poem) => {
    const renderedPoem = [];
    poem.forEach((line, index) => {
      renderedPoem.push(
        <p key={index}>{line}</p>
      )
    });
    return renderedPoem;
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <div>{recitePoem(props.poem)}</div>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
