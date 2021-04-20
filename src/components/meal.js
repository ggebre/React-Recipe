import React from 'react' 

export default function Meal (props) {
    const handleClick = function () {
        fetch('http://localhost:3000/recipes/'+ props.meal.id, {
            method: 'DELETE', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then(resp => console.log(resp))   
    }
    
    return (
        <div>
            { props.meal
                ?
                <div> 
                    {props.fav ? <button onClick={handleClick}>X</button> : null}
                    <img onClick={props.handleImageClick} src={props.meal.strMealThumb} alt={props.meal.strMeal}/>
                    <h2>{props.meal.strMeal}</h2>
                </div>
               : 
                <h3>Loading.....</h3>
            } 
        </div>
    )
}