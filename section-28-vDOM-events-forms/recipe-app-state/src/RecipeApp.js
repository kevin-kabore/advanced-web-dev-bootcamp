import React, { Component } from 'react';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title:"Pasta",
          instructions:'Mix ingredients',
          ingredients: ['Flour', 'Water'],
          img:'spaghetti.jpeg'
        },
        {
          id: 1,
          title: "Milkshake",
          instructions: 'Combine ice cream and milk. Blend until creamy',
          ingredients: ['2 Scoops Ice cream', '8 ounces milk'],
          img: 'milkshake.jpeg'
        },
        {
          id: 2,
          title: 'Avocado Toast',
          instructions: 'Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.',
          ingredients: ['2 slices of bread', '1 avocado', '1 tablespoon olive oil', '1 pinch salt', 'pepper'],
          img: 'avocadotoast.jpeg'
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes})
  }

  handleSave(recipe){
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    })
  }



  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})}/>
        { showForm ?
            <RecipeInput
              onSave={this.handleSave}
              onClose={() => this.setState({showForm: false})}
            /> :
            null}
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;
