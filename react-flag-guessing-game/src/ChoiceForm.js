import React from 'react';
import './ChoiceForm.css';

const ChoiceForm = ({countries, handleChange, checked, handleSubmit}) => {
  console.log(checked);
  countries = countries.map((c, i) => (
    <div key={i} className="radio">
      <label>
        <input
          type="radio"
          value={c.name}
          checked={checked === c.name}
          onChange={handleChange}
        />
          <p>{c.name}</p>
      </label>
    </div>
  ))
  return (
    <form className="choice-form" onSubmit={handleSubmit}>
      {countries}
      <button className="btn" type="submit">Guess</button>
    </form>
  )
}


export default ChoiceForm;
