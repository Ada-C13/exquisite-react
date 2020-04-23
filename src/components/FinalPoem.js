import React from 'react';
import './FinalPoem.css';

const FinalPoem = ({status, poem, onButtonClickCallback}) => {

  return (
    <div className="FinalPoem">
      { status ? <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {poem.map(line => <p>{line}</p>)}
      </section> : null }
      

      <div className="FinalPoem__reveal-btn-container">
        { status ? null : <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onButtonClickCallback} /> }
      </div>
    </div>
  );
}

export default FinalPoem;
