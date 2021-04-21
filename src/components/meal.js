import React from 'react' 
import { connect } from 'react-redux'
import { selectedMeal } from '../action/addMeal'

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
        console.log("CLICKED!!!!")
        props.selectedMeal(props.meal)
    }
    
    return (
        <div>
            { props.meal
                ?
                <div> 
                    {props.fav ? <button onClick={handleClick}>X</button> : null}
                    <img onClick={handleImageClick} src={props.meal.strMealThumb} alt={props.meal.strMeal}/>
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
        selectedMeal: meal => dispatch(selectedMeal(meal))
    }
}
export default connect(null, dSTP)(Meal)