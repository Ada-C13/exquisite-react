import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types' 

const FinalPoem = (props) => {

  const finalPoem = props.sentences.map((sentence, i) => {
    return (
    <p key={i}>The {sentence.adjOne} {sentence.nounOne} {sentence.nounOne} {sentence.adverb} {sentence.verb} the {sentence.adjTwo} {sentence.nounTwo}.</p>
    )
  })

  const displayPoem = (() => {
    if (props.finalClick) {
      return (
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {finalPoem}
        </section>
      );
    } else {
      return (
        <div className="FinalPoem__reveal-btn-container">
          <input 
            type="button" 
            value="We are finished: Reveal the Poem" 
            className="FinalPoem__reveal-btn"
            onClick={onFinalClick} 
          />
        </div>
      );
    }
  })


  const onFinalClick = ( (event) => {
    event.preventDefault();
    props.onFinalClickCallBack(finalPoem)
  })

  return (
    <div className="FinalPoem">
      {displayPoem()}
    </div>
  );
}

FinalPoem.propTypes = {
  onFinalClickCallBack:PropTypes.func.isRequired,
  sentences: PropTypes.array.isRequired,
  finalClick: PropTypes.bool.isRequired,
}

export default FinalPoem;
