import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './components/landingPage/index'
import MealInfo from './components/mealDetail'
import Login from './components/Login'
import useToken from './components/useToken'

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  // sessionStorage.setItem()
  return (
    <div className="App">
      <Router>
          <Route  exact path='/' component={Index} /> 
          <Route  exact path='/recipe' component={MealInfo} /> 
      </Router>
    </div>
  );
}

export default App;
