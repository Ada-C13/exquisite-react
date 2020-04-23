import React from 'react';
import './FinalPoem.css';
import propTypes from 'prop-types';

const FinalPoem = (props) => {
  const poemLine = props.poemList.map((line, index) => {
    return <p key={index}> {line} </p>;
  });

  if (props.finalPoemVisibility) {
    return (
      <div className='FinalPoem'>
        <section className='FinalPoem__poem'>
          <h3>Final Poem</h3>
          {poemLine}
        </section>
      </div>
    );
  } else {
    return (
      <div className='FinalPoem__reveal-btn-container'>
        <input
          type='button'
          value='We are finished: Reveal the Poem'
          onClick={props.onSubmitFinalPoem}
          className='FinalPoem__reveal-btn'
        />
      </div>
    );
  }
};

FinalPoem.propTypes = {
  poemLine: propTypes.arrayOf(propTypes.string),
};

export default FinalPoem;
