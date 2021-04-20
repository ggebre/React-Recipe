import React from 'react' 
import Meal from './meal'
class NewMeal extends React.Component {
    state = {
        meal: null,
        like: true
    }
    componentDidMount(){
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(resp => resp.json())
        .then(randMeal => this.setState({meal : randMeal.meals[0]}))
        // fetch from the api the f
    }
    addToFavorites(){
        // POST a meal after selected 
        const ingredients_attributes = this.recipeIngriedients(this.state.meal)
        const mealData = {
            name: this.state.meal.strMeal,
            image: this.state.meal.strMealThumb,
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
        // if this.state.like is true, post this meal to database and update interface 
        this.setState({ like : !this.state.like})
        this.addToFavorites()
        // favorite meals must be fetched and update the favorite list
    }
    
    render(){
        
        return (
            <div className="random-meal" id="random-meal"> 
                <Meal meal={this.state.meal}/>
                <button onClick={this.handleClick}>{this.state.like ? "LIKE" : "Dislike"}</button>
            </div>
        )
    }
}

export default NewMeal