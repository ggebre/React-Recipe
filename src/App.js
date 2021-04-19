import './App.css';
import Search  from './components/search'
import FavMeals from './components/FavMealsContainer'
import NewMeal from './components/newMeal'
import {MealInfo} from './components/mealDetail'
function App() {
  return (
    <div className="App">
        <Search />
        <FavMeals />
        <NewMeal />
        <MealInfo />
    </div>
  );
}

export default App;
