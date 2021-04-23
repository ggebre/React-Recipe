import React from 'react' 
import Meal from './meal'
import { connect } from 'react-redux'
import { addMeals, selectedMeal } from '../action/addMeal'
class FavMeals extends React.Component {
   
    componentDidMount(){
        fetch("http://localhost:3000/recipes")
        .then(resp => resp.json())
        .then(meals => this.props.addMeals(meals))
    }
    renderFavoriteMeals() {
        
        if(this.props.meals){
            return this.props.meals.map(meal => (<Meal key={meal.id} meal={meal} fav={true}/>))
        }
    }
    
    render(){
       
        return (
            <div className="fav-meal" id="fav-meal">

                {
                    this.renderFavoriteMeals()
                } 
            </div>
        )
    }
}
const mSTP = function(state){
    return {
        meals: state.meals,
        id: state.id
    }
}
const dSTP = function(dispatch){
    return {
        addMeals: meals => dispatch(addMeals(meals)),
        selectMeal: id => dispatch(selectedMeal(id))
    }
}
export default connect(mSTP, dSTP)(FavMeals)