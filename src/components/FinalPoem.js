import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = ({isRevealed, poem, onButtonClickCallback}) => {

  return (
    <div className="FinalPoem">
      { isRevealed ? <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {poem.map((line, index) => <p key={index}>{line}</p>)}
      </section> : null }
      
      <div className="FinalPoem__reveal-btn-container">
        { isRevealed ? null : <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onButtonClickCallback} /> }
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  isRevealed: PropTypes.bool.isRequired,
  poem: PropTypes.array.isRequired,
  onButtonClickCallback: PropTypes.func.isRequired,
};


export default FinalPoem;
