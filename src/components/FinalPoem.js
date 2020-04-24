import React from 'react';
import './FinalPoem.css';

const FinalPoem = props => {

  console.log(props.sentences)

  const finalPoem = props.sentences.map((sentence, i) => {
    return <p key={i}>
      The {sentence[0]} {sentence[1]} {sentence[2]} {sentence[3]} the {sentence[4]} {sentence[5]}. 
    </p>
  });

  const finalPoemButton =
    <div className="FinalPoem__reveal-btn-container">
      <input onClick={props.showPoemCallback} type="button" value="We are finished: Reveal the Full Poem" className="FinalPoem__reveal-btn"/>
    </div>

  const finalPoemContent = finalPoem === true ? <p>{ finalPoem }</p> : <p></p>;
  const conditionalButton = props.poemfinalPoem === false ? <p>{ finalPoemButton }</p> : <p></p>


  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {finalPoemContent}
      </section>
      {conditionalButton}
    </div>
  );
  };


export default FinalPoem;
