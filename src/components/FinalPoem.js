import React, { useState } from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {
  const [reveal, setReveal] = useState(false);

  //REQ: Verify: The final poem shown has all 3 submitted lines, in the order submitted
  const FinalPoemComponents = props.savedLines.map((line, i) => {
    return (
      <p key={i}>
        {line}
      </p>
    );
    });

  //REQ: Manual testing step: Clicking the Reveal the Poem button reveals the section with the header "Final Poem"
  const toReveal = () => {
    setReveal(true);
    props.isPoemFinished(true);
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {reveal == true ? FinalPoemComponents : '' }
      </section>

      <div className="FinalPoem__reveal-btn-container" >
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={toReveal}/>
      </div>
    </div>
  );
};

FinalPoem.propTypes = {
  savedLines: PropTypes.array.isRequired,
  isPoemFinished: PropTypes.func.isRequired
};

export default FinalPoem;