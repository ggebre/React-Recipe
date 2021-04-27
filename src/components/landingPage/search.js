import React from 'react' 
import { connect } from 'react-redux'
import { fetchMeal } from '../../action/addMeal'

class Search extends React.Component {
    state = {
        term: ""
    }
    handleClick = () => {
        let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.state.term
        this.props.fetchMeal(url)
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
const mDTP = dispatch => {
    return {
        fetchMeal: url => dispatch(fetchMeal(url))
    }
}

export default connect(null, mDTP)(Search)