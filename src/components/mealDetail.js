import React from 'react' 
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
class MealInfo extends React.Component {
    state ={
        meal: null 
    }
    componentDidMount(){
        // fetch the recipe with the given id....
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.props.recipeId)
        .then(resp => resp.json())
        .then(meal => this.setState({meal: meal.meals[0]}))
    }
    ingredientList = function(){
        return this.recipeIngriedients(this.state.meal).map(ingredient => (<li key={ingredient.name}>{ingredient.name}</li>))
        // return props.selectedMeal.ingredients.map(ingredient => (<li>{ingredient.name}</li>))
    }
    
    recipeIngriedients = function(meal){
        let count = 1 
        let checkIngredient = true 
        let ingriedients = []
        if(meal.ingredients){
            return meal.ingredients
        }
        while( checkIngredient){
            if(meal["strIngredient"+count]){
                ingriedients.push({name: `${meal["strIngredient"+count]}--${meal["strMeasure"+count]}`})
            }else{
                break 
            }
            count++
        }
        return ingriedients 
    }
    render(){
        
        return (
            <div className="meal-detail" id="meal-detail">
                <NavLink to="/">
                    <button>CLOSE</button>

                </NavLink>
                {
                    this.state.meal 
                        ?
                        <div>
                            <h2> {this.state.meal.strMeal}</h2>
                            <img src={this.state.meal.strMealThumb} />
                            <h3>Instructions</h3>
                            <p>{this.state.meal.strInstructions}</p>
                            <h3>Ingredients</h3>
                            <ul>
                                {
                                    this.ingredientList()
                                }
                            </ul>
                        </div>
                        :
                        null
                }
                
                
            </div>
        )
    }
    
}
const mSTP = (state) => {
    return {
        recipeId: state.recipeId
    }
}
export default connect(mSTP)(MealInfo)