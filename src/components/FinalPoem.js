import React from 'react';
import './FinalPoem.css';

const FinalPoem = ({finalPoemSubmitted}) => {
  const finalPoemDisplayed = finalPoemSubmitted.map((sentence) => {
    return (
      <p>{sentence}</p>
    )
  })
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {finalPoemDisplayed}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
