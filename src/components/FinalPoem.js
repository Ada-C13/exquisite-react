import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  if (props.condition) {
  return (
    <div className="FinalPoem__reveal-btn-container" >
      <input 
        type="button" 
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn" 
        onClick={props.onFinalPoemClick}
      />
    </div>
  );
  } else {
    return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      <div>{props.poem.map((line, key) => {
        return (<p key={key}>{line}</p>)
      })}
      </div>
      </section>
    </div>
    );
  };
};

FinalPoem.propTypes = {
  poem: PropTypes.array.isRequired,
  onFinalPoemClick: PropTypes.func.isRequired,
  condition: PropTypes.bool.isRequired,
}

export default FinalPoem;
