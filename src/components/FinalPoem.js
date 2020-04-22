import React from 'react';
import './FinalPoem.css';

const FinalPoem = ({isDone, poem, onClickCallback}) => {

  return (
    <div className="FinalPoem">
        {
          isDone && (
            <section className="FinalPoem__poem">
              <h3>Final Poem</h3>
              {poem.map(line => <p>{line}</p>)}
            </section>
          )
        }
      <div className="FinalPoem__reveal-btn-container">
        {
          isDone || 
          <input 
          type="button"
          onClick={onClickCallback}
          value="We are finished: Reveal the Poem"
          className="FinalPoem__reveal-btn" />
        }
        
      </div>
    </div>
  );
}

export default FinalPoem;
