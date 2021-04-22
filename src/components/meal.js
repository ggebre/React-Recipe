import React from 'react' 
import { connect } from 'react-redux'
import { recipeSelected, addMeals } from '../action/addMeal'
import { NavLink } from 'react-router-dom'

function Meal (props) {
    const handleClick = function () {
        fetch('http://localhost:3000/recipes/'+ props.meal.id, {
            method: 'DELETE', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then(resp => {
            fetch("http://localhost:3000/recipes")
            .then(resp => resp.json())
            .then(meals => props.addMeals(meals))
          })
          
        //   fetch favorites and update page...once it is deleted
          
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
        addMeals: meals => dispatch(addMeals(meals)),
        recipeSelected: id => dispatch(recipeSelected(id))
    }
}
export default connect(null, mDTP)(Meal)