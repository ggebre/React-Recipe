import './App.css';
import Search  from './components/search'
import FavMeals from './components/FavMealsContainer'
import NewMeal from './components/newMeal'

function App() {
  return (
    <div className="App">
        <Search />
        <h2>Favorite Meals</h2>
        <FavMeals />
        <NewMeal />
    </div>
  );
}

export default App;
