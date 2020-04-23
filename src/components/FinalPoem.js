import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

// show/hide components and buttons
// https://www.chrisblakely.dev/how-to-show-hide-elements-in-react-using-hooks


const FinalPoem = ({poem, onSubmitCallback, submittedLines}) => {

  const [showPoem, setShowPoem ] = useState('');

  const onFinalSubmit = (event) => {
    event.preventDefault()
    let finalPoemLines = submittedLines.join(' \n');
    setShowPoem(finalPoemLines);

  }





  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem FinalPoem__display-linebreak">
        <h3>Final Poem</h3>
          {showPoem}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onFinalSubmit}/>
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  // onFinalSubmit: PropTypes.func.isRequired
  submittedLines: PropTypes.array.isRequired
}

export default FinalPoem;
