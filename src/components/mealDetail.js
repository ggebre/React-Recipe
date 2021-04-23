import React from 'react' 
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchMeal } from '../action/addMeal'

class MealInfo extends React.Component {
    state ={
        meal: null 
    }
    componentDidMount(){
        // fetch the recipe with the given id....
        let url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.props.recipeId
       
        this.props.fetchMeal(url)
    }
    
    ingredientList = function(){
        return this.recipeIngriedients(this.props.meal).map(ingredient => (<li key={ingredient.name}>{ingredient.name}</li>))
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
                
                <div>
                    <h2> {this.props.meal.strMeal}</h2>
                    <img src={this.props.meal.strMealThumb} />
                    <h3>Instructions</h3>
                    <p>{this.props.meal.strInstructions}</p>
                    <h3>Ingredients</h3>
                    <ul>
                        {
                            this.ingredientList()
                        }
                    </ul>
                </div>
                
            </div>
        )
    }
    
}
const mSTP = (state) => {
    return {
        recipeId: state.recipeId,
        meal: state.meal
    }
}
const mDTP = dispatch => {
    return {
        fetchMeal: url => dispatch(fetchMeal(url))
    }
}
export default connect(mSTP, mDTP)(MealInfo)