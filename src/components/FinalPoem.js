import React, {useState} from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  let increment = 0;
  let finalPoem = props.poemList.map(sentence => {
    increment += 1
  return (<p key={increment}>{sentence}</p>) 
  });

  return (
    <div className="FinalPoem">
      { props.showFinal ? 
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {finalPoem}
        </section> : 
        null
      }

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.onFinalPoemSubmit} />
      </div>
    </div>
  );
}


// User Stories
// *DONE* As players who have submitted one or more lines, I want to see all of the submissions of poetry lines in the section named "Final Poem".
// *DONE* As a player, I want to see each submission in the final poem section on a different line or paragraph, so that it looks more like a structured poem.

export default FinalPoem;