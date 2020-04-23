import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = ({ poemList, onSubmitCallback, poemRevealed }) => {
  
  const revealFullPoem = poemList => {
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
    // show section if final submit button has been clicked
    // else show reveal button instead
    <div className="FinalPoem">
      { poemRevealed &&
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
            {revealFullPoem(poemList)}
        </section>
      }

      { !poemRevealed && 
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

FinalPoem.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
  poemRevealed: PropTypes.bool.isRequired,
  poemList: PropTypes.arrayOf(
    PropTypes.shape({
      adj1: PropTypes.string.isRequired,
      noun1: PropTypes.string.isRequired,
      adv: PropTypes.string.isRequired,
      verb: PropTypes.string.isRequired,
      adj2: PropTypes.string.isRequired,
      noun2: PropTypes.string.isRequired
    })
  )
};

export default FinalPoem;