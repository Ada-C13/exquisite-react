import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const result = props.poems.map((poem, i) =>{
  const {firstAdjective, firstNoun, adverb, verb, secondAdjective, secondNoun} = poem
   return <p key ={i}> The {firstAdjective} {firstNoun} {adverb} {verb} the {secondAdjective} {secondNoun} .</p>
  })

  const onButtonClick = () =>{
    props.callBackOnShowPoem()
  }

  return (
    <div className="FinalPoem">
      {!props.showPoem && <section className="FinalPoem__poem" >
        <h3>Final Poem</h3>
        {result}

      </section>}

      {props.showPoem && <div className="FinalPoem__reveal-btn-container">
        <input type="button" 
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn" 
        onClick = {onButtonClick}/>
      </div>}
    </div>
  );
}

export default FinalPoem;
