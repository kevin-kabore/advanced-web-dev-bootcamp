import React from 'react';
import './ChoiceForm.css'
const ChoiceForm = props => {
  return (
    <form className="choice-form">
      <div className="radio">
        <label>
          <input type="radio" value="option1" checked={true} />
          Option 1
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="option2" checked={false} />
          Option 2
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="option3" checked={false} />
          Option 3
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="option4" checked={false} />
          Option 4
        </label>
      </div>
    </form>
  )
}


export default ChoiceForm;
