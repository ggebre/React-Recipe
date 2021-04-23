import React from 'react' 
import { connect } from 'react-redux'
import { recipeSelected, dislikeMeal } from '../action/addMeal'
import { NavLink } from 'react-router-dom'

function Meal (props) {
    const handleClick = function () {
        props.dislikeMeal('http://localhost:3000/recipes', props.meal.id)   
    }
    
    const handleImageClick = function () {
        props.recipeSelected(props.meal.idMeal)
    }
    
    return (
        <div className="meal">
            { props.meal
                ?
                <div> 
                    {props.fav ? <button onClick={handleClick}>X</button> : null}
                    <NavLink to="/recipe" exact>
                        <img onClick={handleImageClick} src={props.meal.strMealThumb} alt={props.meal.strMeal}/>
                        </NavLink>
                    <h2>{props.meal.strMeal}</h2>
                </div>
               : 
                <h3>Loading.....</h3>
            } 
        </div>
    )
}


const mDTP = function(dispatch){
    return {
        recipeSelected: id => dispatch(recipeSelected(id)),
        dislikeMeal: (url, id) => dispatch(dislikeMeal(url, id))
    }
}
export default connect(null, mDTP)(Meal)