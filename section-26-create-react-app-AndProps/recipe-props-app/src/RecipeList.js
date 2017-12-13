import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title:"Pasta",
        instructions:'Mix ingredients',
        ingredients: ['Flour', 'Water'],
        img:'spaghetti.jpeg'
      },
      {
        title: "Milkshake",
        instructions: 'Combine ice cream and milk. Blend until creamy',
        ingredients: ['2 Scoops Ice cream', '8 ounces milk'],
        img: 'milkshake.jpeg'
      },
      {
        title: 'Avocado Toast',
        instructions: 'Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.',
        ingredients: ['2 slices of bread', '1 avocado', '1 tablespoon olive oil', '1 pinch salt', 'pepper'],
        img: 'avocadotoast.jpeg'
      }
    ]
  }

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const recipes = this.props.recipes.map((r, i) => (
      <Recipe
        key={i}
        {...r}
      />
    ))
    return (
      <div className="recipe-list-container">
        {recipes}
      </div>
    )
  }
}

export default RecipeList;
