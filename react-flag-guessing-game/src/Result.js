import React from 'react';

const Result = ({result, handleReset}) => {
  return (
    <div>
      <p>{result}</p>
      <button className="btn" onClick={handleReset}>NEXT</button>
    </div>
  )
}
export default Result;
