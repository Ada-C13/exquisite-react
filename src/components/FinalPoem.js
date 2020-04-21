import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  console.log("FinalPoem PROPS:");
  console.log(props);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
  } 
  
  
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input
          type="button"
          value="We are finished: Reveal the Poem"
          className="FinalPoem__reveal-btn"
          onSubmit={onSubmitHandler}
        />
      </div>
    </div>
  );
}

export default FinalPoem;
