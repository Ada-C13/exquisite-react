import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  

  const onRevealThePoem = (event) => {
    event.preventDefault();
    props.displayNow(true);
  }

  return (
    <div className="FinalPoem" onSubmit={onRevealThePoem}>
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <p> {props.displayPoem}</p>
        </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
