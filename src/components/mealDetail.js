import React from 'react' 
import { connect } from 'react-redux'

const MealInfo = (props) => {
    const ingredientList = function(){
        props.selectedMeal.ingredients.map(ingredient => (<li>{ingredient.name}</li>))
    }
    return (
        <div className="meal-detail" id="meal-detail">
            <button>CLOSE</button>
            <h2> {props.selectedMeal.strMeal}</h2>
            <img src={props.selectedMeal.strMealThumb} />
            <ul>
                {
                    ingredientList()
                }
            </ul>
            
        </div>
    )
}
const mSTP = (state) => {
    return {
        selectedMeal: state.selected 
    }
}
export default connect(mSTP)(MealInfo)