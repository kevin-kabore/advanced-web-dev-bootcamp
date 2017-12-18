import React from 'react';
import './ChoiceForm.css';

const ChoiceForm = ({countries}) => {
  countries = countries.map((c, i) => (
    <div key={i} className="radio">
      <label>
        <input type="radio" value={`option${i+1}`} checked={false} />
          <p>{c.name}</p>
      </label>
    </div>
  ))
  return (
    <form className="choice-form">
      {countries}
    </form>
  )
}


export default ChoiceForm;
