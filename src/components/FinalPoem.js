import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  // parse array of poems into sentences
  const poemsCollection = props.poems.map((poem, i) => {

    // object destructuring
    const { adj1, noun1, adverb, verb, adj2, noun2 } = poem
    
    const sentence = `The ${adj1} ${noun1} ${adverb} ${verb} the ${adj2} ${noun2}.` 
      return <p key={i}> {sentence}</p>;
    }

  );

  // callback function that toggles state to display either the button or the poem
  const onButtonClick = () => {
    props.onClickCallback();
  }

  const displayPoem = 
  <div className="FinalPoem">
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      <ul>{ poemsCollection }</ul>
    </section>
  </div>

  const revealButton = 
  <div className="FinalPoem__reveal-btn-container">
  <input 
    type="button" 
    value="We are finished: Reveal the Poem" 
    className="FinalPoem__reveal-btn" 
    onClick={ onButtonClick } />
</div>

  // returns either the poem or the button depending on if the button has been clicked
  return (
    props.displayFullPoem ? displayPoem : revealButton
  );
}

FinalPoem.propTypes = {
  poems: PropTypes.array,
  displayFullPoem: PropTypes.bool,
  onClickCallback: PropTypes.func
}

export default FinalPoem;
