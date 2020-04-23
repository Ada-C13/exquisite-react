import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

// show/hide components and buttons
// https://www.chrisblakely.dev/how-to-show-hide-elements-in-react-using-hooks


const FinalPoem = ({onSubmitCallback, submittedLines,}) => {

  const [fullPoem, setFullPoem ] = useState('');
  const [showButton, setShowButton] = useState(true)

  const onFinalSubmit = (event) => {
    event.preventDefault();
    let finalPoemLines = submittedLines.join(' \n');
    setFullPoem(finalPoemLines);
    onSubmitCallback(true);
    setShowButton(false);
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem FinalPoem__display-linebreak">
        <h3>Final Poem</h3>
          {fullPoem}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        {showButton && <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onFinalSubmit}/>}
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
  submittedLines: PropTypes.array.isRequired
}

export default FinalPoem;
