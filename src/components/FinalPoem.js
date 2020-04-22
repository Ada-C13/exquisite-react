import React, { useState } from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const [reveal, setReveal] = useState(false);

  const FinalPoemComponents = props.savedLines.map((line, i) => {
    return (
      <p key={i}>
        {line}
      </p>
    );
    });

  const toReveal = () => {
    setReveal(true);
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

export default FinalPoem;

//TO DO: get final poem to reveal
//TO DO: hide submission form when poem is revealed