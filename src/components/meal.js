import React from 'react' 

export default function Meal (props) {
    return (
        <div>
            { props.meal
                ?
                <div> 
                    <img src={props.meal.strMealThumb} alt={props.meal.strMeal}/>
                    <h2>{props.meal.strMeal}</h2>
                </div>
               : 
                <h3>Loading.....</h3>
            } 
        </div>
    )
}