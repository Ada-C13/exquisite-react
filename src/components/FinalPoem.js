import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

console.log(props.poemList)
// props.poemList.forEach((line) => {
//   return ( <h3> {line} </h3>)
// })

//figure out how to render this one line at a time 

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {props.poemList.forEach((line) => {
          return ( <h3> {line} </h3>)
        })}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
