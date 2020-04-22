import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  
  const onRevealThePoem = (event) => {
    event.preventDefault();
    props.setAllSentences(true);
  }

  function formatSentence(sentence){

    let fullSentence = '';
    sentence = sentence.split(" ");
    for(let i = 0; i < sentence.length; i++){
      
      if(i === 0){
        fullSentence += ("The " + sentence[i]);

      }else if(i === 3){
        fullSentence += (" " +  sentence[i] + " the ");

      }else{
        fullSentence +=  (" " + sentence[i]);
      }
      
    }
    return fullSentence;
  
  }
  
  return (
    <div className="FinalPoem" onClick={onRevealThePoem}>
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

        {props.poemLines.map((line, i) => {
          return (
            <div key={`${i}`}> 
              <p> {formatSentence(line)} </p>
            </div>
          );
        })} 

        </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  poemLines: PropTypes.array,
  setAllSentences: PropTypes.func
}

export default FinalPoem;
