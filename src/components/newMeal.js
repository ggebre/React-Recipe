import React from 'react' 
import Meal from './meal'
import MealInfo from './mealDetail'

import { connect } from 'react-redux'
import { addMeal, likeMeal } from '../action/addMeal'
class NewMeal extends React.Component {
    
    componentDidMount(){
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(resp => resp.json())
        .then(randMeal => this.props.addMeal(randMeal.meals[0]))
        // fetch from the api the f
    }
    addToFavorites(){
        // POST a meal after selected 
        const ingredients_attributes = this.recipeIngriedients(this.props.meal)
        const mealData = {
            name: this.props.meal.strMeal,
            image: this.props.meal.strMealThumb,
            ingredients_attributes
        }
        
        fetch('http://localhost:3000/recipes', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(mealData),
          })
          .then(resp => resp.json())
          .then(meal => console.log(meal))
        
    }
    recipeIngriedients (meal){
        let count = 1 
        let checkIngredient = true 
        let ingriedients = []
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
    handleClick = () => {
        
        this.props.likeMeal()
        this.addToFavorites()
        // favorite meals must be fetched and update the favorite list
    }
    
    render(){
        
        return (
            <div className="random-meal" id="random-meal"> 
                <Meal/>
                <button onClick={this.handleClick}>{this.props.like ? "LIKE" : "Dislike"}</button>
                {
                    this.props.selected
                        ?
                        <MealInfo />
                        : 
                        null 
                }
            </div>
        )
    }
}
const mSTP = function(state){
    return {
        meal: state.meal,
        like: state.like,
        selected: state.selected
    }
}
const dSTP = function(dispatch){
    return {
        addMeal: meal => dispatch(addMeal(meal)),
        likeMeal: () => dispatch(likeMeal())
    }
}
export default connect(mSTP, dSTP)(NewMeal)