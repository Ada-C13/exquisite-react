import React, { useState } from 'react';
import './FinalPoem.css';

const FinalPoem = ({poem, onSubmitCallback}) => {

  const [showPoem, setShowPoem ] = useState('');
  const [showFinalPoemButton, setShowFinalPoemButton] = useState(true);
  let finalPoemLines = [];
  
  poem.forEach (poemLine => {
    finalPoemLines.push(Object.values(poemLine).join(" ").concat('.'));
  });

  const onFinalPoemButtonClick = (event) => {
    event.preventDefault();
    
    let finalPoem =  finalPoemLines.join('\n');
    setShowPoem(finalPoem);
    onSubmitCallback(false);
    setShowFinalPoemButton(false);
    }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem FinalPoem__display-linebreak ">
        <h3>Final Poem</h3>
        
        {showPoem}
        
      </section>

      {showFinalPoemButton &&
      <div className="FinalPoem__reveal-btn-container">
        <input 
        type="button" 
        onClick={onFinalPoemButtonClick}
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn" />
      </div>}
    </div>
  );
}

export default FinalPoem;
