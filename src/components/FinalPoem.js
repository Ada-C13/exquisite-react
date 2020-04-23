import React from 'react';
import './FinalPoem.css';

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
            <input onClick={props.onGameOverCallback} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
          </div>
        )
      }
      
    </div>
  );
}

export default FinalPoem;
