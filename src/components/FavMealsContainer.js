import React from 'react' 
import Meal from './meal'
class FavMeals extends React.Component {
    state = {
        meals: null
    }
    componentDidMount(){
        fetch("http://localhost:3000/recipes")
        .then(resp => resp.json())
        .then(meals => this.setState({meals}))
    }
    renderFavoriteMeals() {
        if(this.state.meals){
            return this.state.meals.map(meal => (<Meal handleImageClick={this.handleImageClick} key={meal.id} meal={{id: meal.id, strMealThumb : meal.image, strMeal: meal.name}} fav={true}/>))
        }
    }
    handleImageClick = function () {
        // display Detail HERE!!!!!
        // create a route and call it here!!!!
    }
    render(){
        
        return (
            <div className="fav-meal" id="fav-meal">
                <h1>Favorite MEALs</h1>
                {
                    this.renderFavoriteMeals()
                } 
            </div>
        )
    }
}

export default FavMeals