
function mealsReducer(state = {like: true, meals: []}, action) {
    switch(action.type) {
        case 'ADD_MEALS':
            return {...state, meals: action.meals}
        case 'ADD_MEAL':
            return {...state, meal: action.meal}
        case 'LIKE_MEAL':
            return {...state, like: !state.like}
        case 'SELECT_MEAL': 
            
            return {...state, selected: action.selected}
        case 'SELECT_ID':
            return {...state, recipeId: action.id}
        default: 
            return state 
    }
}

export default mealsReducer