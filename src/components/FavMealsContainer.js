import React from 'react' 
import Meal from './meal'
class FavMeals extends React.Component {
    state = {
        meals: null
    }
    componentDidMount(){
        
        // fetch from the api the favorites 
    }
    render(){
        return (
            <div className="fav-meal" id="fav-meal">
                <h1>Favorite MEALs</h1>
                <Meal />    
            </div>
        )
    }
}

export default FavMeals