import React from 'react' 
import { connect } from 'react-redux'
import { recipeSelected } from '../action/addMeal'
import { NavLink } from 'react-router-dom'

function Meal (props) {
    const handleClick = function () {
        fetch('http://localhost:3000/recipes/'+ props.meal.id, {
            method: 'DELETE', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then(resp => console.log(resp))   
    }
    const handleImageClick = function () {
       
        props.recipeSelected(props.meal.idMeal)
    }
    
    return (
        <div>
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

const dSTP = function(dispatch){
    return {
        recipeSelected: id => dispatch(recipeSelected(id))
    }
}
export default connect(null, dSTP)(Meal)