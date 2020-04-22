import React from 'react';
import './FinalPoem.css';

const FinalPoem = ({ poemList, onSubmitCallback, finalReveal }) => {
  
  const showWholePoem = poemList => {
    return poemList.map((item, index) => {
      return (
          <p key={index}>
            {`The ${item.adj1} ${item.noun1} ${item.adv} ${item.verb} the ${item.adj2} ${item.noun2}.`}
          </p>
        );
    });
  }

  const onFinalPoemSubmit = () => {
    onSubmitCallback();
  }
  
  return (
    // show section if final submit button has been clicked, else show submit button instead
    <div className="FinalPoem">
      { finalReveal &&
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
            {showWholePoem(poemList)}
        </section>
      }

      { !finalReveal && 
        <div className="FinalPoem__reveal-btn-container">
          <input
            type="button"
            value="We are finished: Reveal the Poem"
            className="FinalPoem__reveal-btn"
            onClick={onFinalPoemSubmit}
          />
        </div>
      }
    </div>
  );
}

export default FinalPoem;