import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  const onDisplayPoem = (event) => {
    event.preventDefault();
    props.setFieldsPoem(true);
  };
  // Display message format like demo
  function formatFields(fieldInput){
    let fullPoem = '';
    fieldInput = fieldInput.split(" ");
  
    for(let i = 0; i < fieldInput.length; i++){
      if(i === 0){
        fullPoem += ("The " + fieldInput[i]);
      }else if(i === 3){
        fullPoem += (" " + fieldInput[i] + " the "); 
      }else{
        fullPoem += (" " + fieldInput[i] );
      };
    };
    return (fullPoem + ".");
  }

  return (
    <div className="FinalPoem" onClick={onDisplayPoem}>
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

        {props.poemLines.map((line, i) => {
          return(
            <div key={`${i}`}>
              <p>{formatFields(line)}</p>
            </div>
          );
        })}
      </section>
      
      <div className="FinalPoem__reveal-btn-container">
        <input 
          type="button" 
          value="We are finished: Reveal the Poem" 
          className="FinalPoem__reveal-btn" 
        />
      </div>
    </div>
  );
}
FinalPoem.propTypes = {
  poemLines: PropTypes.array,
  setFieldsPoem: PropTypes.func
};

export default FinalPoem;
