import React from 'react' 
import Meal from './meal'
import { connect } from 'react-redux'
import { addMeal, addMeals, likeMeal } from '../action/addMeal'
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
            strInstructions: this.props.meal.strInstructions,
            idMeal: this.props.meal.idMeal,
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
          .then(meal => this.fetchFavorites())
        
    } 
    fetchFavorites(){
        fetch("http://localhost:3000/recipes")
        .then(resp => resp.json())
        .then(meals => this.props.addMeals(meals))
    }
    dislikeFavorite(){
        let favLength = this.props.meals.length 
        let lastFavoriteSaved = this.props.meals[favLength - 1].id 
        fetch("http://localhost:3000/recipes/"+ lastFavoriteSaved, {
            method: 'DELETE',
    
        })
        .then(resp => this.fetchFavorites())
        
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
        
        if (this.props.like){
            this.addToFavorites()
        }else{
            this.dislikeFavorite()
        }
        
        this.props.likeMeal()
    }
    
    render(){
        
        return (
            <div className="random-meal" id="random-meal"> 
                <Meal meal={this.props.meal}/>
                <button onClick={this.handleClick}>{this.props.like ? "LIKE" : "Dislike"}</button>
            </div>
        )
    }
}
const mSTP = function(state){
    return {
        meals: state.meals,
        meal: state.meal,
        like: state.like,
    }
}
const dSTP = function(dispatch){
    return {
        addMeal: meal => dispatch(addMeal(meal)),
        likeMeal: () => dispatch(likeMeal()),
        addMeals: meals => dispatch(addMeals(meals))
    }
}
export default connect(mSTP, dSTP)(NewMeal)