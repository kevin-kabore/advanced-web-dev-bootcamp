import React, { Component } from 'react';
import Recipe from './Recipe'
import './RecipeList.css'
class RecipeList extends Component {
  render() {
    return (
      <div className="recipe-list-container">
        <Recipe
          title="Pasta"
          ingredients={['Flour', 'Water']}
          instructions='Mix ingredients'
          img='spaghetti.jpeg'
        />
        <Recipe
          title="Milkshake"
          ingredients={['2 Scoops Ice cream', '8 ounces milk']}
          instructions='Combine ice cream and milk. Blend until creamy'
          img='milkshake.jpeg'
        />
        <Recipe
          title='Avocado Toast'
          ingredients={['2 slices of bread', '1 avocado', '1 tablespoon olive oil', '1 pinch salt', 'pepper']}
          instructions='Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.'
          img='avocadotoast.jpeg'
        />
      </div>
    )
  }
}

export default RecipeList;
