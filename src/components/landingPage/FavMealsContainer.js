import React from 'react' 
import Meal from './meal'
import { connect } from 'react-redux'
import {fetchMeals } from '../../action/addMeal'
class FavMeals extends React.Component {
   
    componentDidMount(){
        this.props.fetchMeals("http://localhost:3000/recipes")
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
       
    }
}
const dSTP = function(dispatch){
    return {
        fetchMeals: url => dispatch(fetchMeals(url))
    }
}
export default connect(mSTP, dSTP)(FavMeals)