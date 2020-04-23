import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

const FinalPoem = (props) => {

  const recitePoem = (poem) => {
    return poem.map((line, index) => {
      return <p key={index}>{line}</p>
    });
  }

  if (props.isFinal){

    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          <div>{recitePoem(props.poem)}</div>
        </section>
      </div>
    );
  
  } else {

    return (
      <div className="FinalPoem">
        <div className="FinalPoem__reveal-btn-container">
          <input
            type="button"
            onClick={props.onFinalClick}
            value="We are finished: Reveal the Poem"
            className="FinalPoem__reveal-btn" />
        </div>
      </div>
    );
  }
}

FinalPoem.propTypes = {
  poem: PropTypes.array.isRequired,
  isFinal: PropTypes.bool.isRequired,
  onFinalClick: PropTypes.func.isRequired,
};

export default FinalPoem;