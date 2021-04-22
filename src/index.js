import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import mealsReducer from './reducer/mealReducer'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MealInfo from './components/mealDetail'
const store = createStore(mealsReducer)
ReactDOM.render(
  
    <Provider store={store}>
      <Router>
          <Route  exact path='/' component={App} /> 
          <Route  exact path='/recipe' component={MealInfo} /> 
      </Router>
    </Provider>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
