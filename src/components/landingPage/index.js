import React from 'react' 
import Search  from './search'
import FavMeals from './FavMealsContainer'
import NewMeal from './newMeal'

function Index(){
    return (
        <div>
            
            <Search />
            <h2>Favorite Meals</h2>
            <FavMeals />
            <NewMeal />
        </div>
    )
}

export default Index