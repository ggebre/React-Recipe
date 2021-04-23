import React from 'react' 
import { connect } from 'react-redux'
import { addMeal } from '../action/addMeal'

class Search extends React.Component {
    state = {
        term: ""
    }
    handleClick = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.state.term)
        .then(resp => resp.json())
        .then(meal => this.props.addMeal(meal.meals[0]))

        this.setState({term: ""})
    }
    handleChange = (e) => {
        this.setState({term: e.target.value})
    }
    render() {
        return (
            <div className="search">
                <input onChange={(e) => this.handleChange(e)} type="text" value={this.state.term}/>
                <button onClick={this.handleClick}>SEARCH</button>
            </div>
        )
    }
    
}
const mSTP = state => {
    return {
        meal: state.meal 
    }
}
const mDTP = dispatch => {
    return {
        addMeal: meal => dispatch(addMeal(meal))
    }
}

export default connect(mSTP, mDTP)(Search)