import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const onDisplayPoem = (event) => {
    event.preventDefault();
  };

  return (
    <div className="FinalPoem" onSubmit={onDisplayPoem}>
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
