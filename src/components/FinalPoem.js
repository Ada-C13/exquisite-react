import React from 'react';
import './FinalPoem.css';

const FinalPoem = ({finalPoemSubmitted, isFinalPoemVisible, showFinalPoem}) => {
  

  const finalPoemDisplayed = finalPoemSubmitted.map((sentence) => {
    return (
      <p>{sentence}</p>
    )
  })

  return (
    <div className="FinalPoem">
      {isFinalPoemVisible && (
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {finalPoemDisplayed}
        </section>
      )}

      {!isFinalPoemVisible && (
        <div className="FinalPoem__reveal-btn-container">
          <button
            className="FinalPoem__reveal-btn" 
            onClick={showFinalPoem}
          >
            We are finished: Reveal the Poem
          </button>
        </div>
      )}
    </div>
  );
}

export default FinalPoem;
