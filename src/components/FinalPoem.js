import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const poemLines = props.poem.map((line) => {
    return <p>{line}</p>
  });

  const onButtonClick = () => {
    props.onClickCallback();
  }

  let poem = null;
  let button = (
    <div className="FinalPoem__reveal-btn-container">
      <input 
        type="button" 
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn"
        onClick={onButtonClick} 
      />
    </div>
  );

  if (props.inProgress === "no") {
    button = null;
    poem = (
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {poemLines}
      </section>
    );
  }

  return (
    <div className="FinalPoem">
      {poem}
      {button}
    </div>
  )
};

export default FinalPoem;
