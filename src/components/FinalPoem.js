import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  console.log(props)

  // Each submission in the final poem section on a different line or paragraph.
  const showingPoemLines = props.poems.map((poem, i) => {
    return (
      <p key={i}>{poem}</p>
    )
  });


  return (
    <div className="FinalPoem">
      { 
      props.playing || (
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {/* See all of the submissions of poetry lines in the section named "Final Poem". */}
          {showingPoemLines}
        </section>
        )
      } 
      {
        props.playing && (
          <div className="FinalPoem__reveal-btn-container">
            {/* A button to click to finalize the poem and reveal the entire final poem, 
            it does not show the previous lines until the poem is finished. */}
            <input onClick={props.onGameOverCallback} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
          </div>
        )
      }
      
    </div>
  );
}

FinalPoem.propTypes = {
  poems: PropTypes.array.isRequired,
  playing: PropTypes.bool.isRequired,
  onGameOverCallback: PropTypes.func.isRequired
};

export default FinalPoem;
