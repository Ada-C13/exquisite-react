import React, { useState } from 'react';
import './FinalPoem.css';

const FinalPoem = ({poem}) => {

  const [showPoem, setShowPoem ] = useState('');
  let finalPoemLines = [];
  
  poem.forEach (poemLine => {
    finalPoemLines.push(Object.values(poemLine).join(" ").concat('.'));
  });

  

  // poem = array of objects
  // for each element in the array
  // go and concatenate the object values and store this as a string in an array
  // will have an array of all the poem lines

  const onFinalPoemButtonClick = (event) => {
    event.preventDefault();
    
    const finalPoem =  finalPoemLines.join('');
    console.log(`This is ${finalPoem}`);
    setShowPoem(finalPoem);

    }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {showPoem}
        
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input 
        type="button" 
        onClick={onFinalPoemButtonClick}
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
