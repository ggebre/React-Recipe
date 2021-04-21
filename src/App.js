import './App.css';
import Search  from './components/search'
import FavMeals from './components/FavMealsContainer'
import { connect } from 'react-redux'
import NewMeal from './components/newMeal'
import MealInfo from './components/mealDetail'

function App() {
  return (
    <div className="App">
        <Search />
        <FavMeals />
        <NewMeal />
        {
          false
            ?
            <MealInfo />
              :
              null
          
        }
        
    </div>
  );
}

export default App;
