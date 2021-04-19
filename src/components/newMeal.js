import React from 'react' 
import Meal from './meal'
class NewMeal extends React.Component {
    state = {
        meal: null
    }
    componentDidMount(){
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(resp => resp.json())
        .then(randMeal => this.setState({meal : randMeal.meals[0]}))
        // fetch from the api the f
    }
    addToFavorites(){
        // POST a meal after selected 
    }
    render(){
        return (
            <div className="random-meal" id="random-meal"> 
                <Meal meal={this.state.meal}/>
            </div>
        )
    }
}

export default NewMeal