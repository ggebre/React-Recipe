import React from 'react' 
import Meal from './meal'
import { connect } from 'react-redux'
import {likeMeal, fetchMeal, fetchMeals, postMeal, dislikeMeal } from '../action/addMeal'
class NewMeal extends React.Component {
    
    componentDidMount(){
        // fetch from the api the f
        this.props.fetchMeal("https://www.themealdb.com/api/json/v1/1/random.php")
    }
    addToFavorites(){
        // POST a meal after selected 
        const ingredients_attributes = this.recipeIngriedients(this.props.meal)
    
        const mealData = {...this.props.meal, ingredients_attributes}
        
        this.props.postMeal('http://localhost:3000/recipes', mealData)
    } 
    
    dislikeFavorite(){
        let favLength = this.props.meals.length 
        let lastFavoriteSaved = this.props.meals[favLength - 1].id 
        
        this.props.dislikeMeal("http://localhost:3000/recipes", lastFavoriteSaved)
        
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
        likeMeal: () => dispatch(likeMeal()),
        fetchMeal: url => dispatch(fetchMeal(url)),
        fetchMeals: url => dispatch(fetchMeals(url)),
        postMeal: (url, data) => dispatch(postMeal(url, data)),
        dislikeMeal: (url, id) => dispatch(dislikeMeal(url, id))
    }
}
export default connect(mSTP, dSTP)(NewMeal)