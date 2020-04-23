import React from 'react';
import './FinalPoem.css';
import PropTypes from "prop-types";

const FinalPoem = (props) => {
  
  const result = props.finalPoem.map((poem, i) => {
    const {firstAdjective, firstNoun, adverb, verb, secondAdjective, secondNoun} = poem;
    return <p key = {i}> The {firstAdjective} {firstNoun} {adverb} {verb} the {secondAdjective} {secondNoun} .</p>
  })
    
  const onFinalSubmit = () => {
    props.onClickCallback()
  }
  return (
    <div className="FinalPoem">
      {props.revealFinalPoem? <section className="FinalPoem__poem">
        <h3>{'Final Poem'}</h3>
        {result}
      </section> : ""}

      {props.revealFinalPoem? "" : <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onFinalSubmit}/>
      </div>}
    </div>
  );
}

FinalPoem.propTypes = {
  finalPoem: PropTypes.arrayOf(
    PropTypes.shape({
      firstAdjective: PropTypes.string.isRequired,
      firstNoun: PropTypes.string.isRequired,
      adverb: PropTypes.string.isRequired,
      verb: PropTypes.string.isRequired,
      secondAdjective: PropTypes.string.isRequired,
      secondNoun: PropTypes.string.isRequired,
    })
  ),
  revealFinalPoem: PropTypes.bool.isRequired,
  onClickCallback: PropTypes.func.isRequired,
};
export default FinalPoem;
