
export const addMeals = function(meals) {
    return {
        type: "ADD_MEALS",
        meals
    }
}
export const addMeal = function(meal){
    return {
        type: "ADD_MEAL",
        meal
    }
}

export const likeMeal = function (){
    return {
        type: "LIKE_MEAL"
    }
}
export const selectedMeal = function (selected){
    return {
        type: "SELECT_MEAL",
        selected
    }
}
export const recipeSelected = function (id){
    return {
        type: "SELECT_ID",
        id
    }
}

export const fetchMeals = function(url){
    console.log(url)
    return dispatch => {
        fetch(url ,{
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
              'Authorization': JSON.parse(sessionStorage.token).token
            }})
            .then(resp => resp.json())
            .then(meals => dispatch({
                type: "ADD_MEALS",
                meals
            }))
    }
}
// ,{
//     method: 'GET', 
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': sessionStorage.token
//     }}
export const fetchMeal = function(url){
    return dispatch => {
        fetch(url)
            .then(resp => resp.json())
            .then(meal => dispatch({
                type: "ADD_MEAL",
                meal: meal.meals[0]
            }))
    }
}
export const postMeal = function(url, data){
    return dispatch => {
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
              'Authorization': JSON.parse(sessionStorage.token).token
            },
            body: JSON.stringify(data),
        })
        .then(resp => resp.json())
        .then(meal => dispatch(fetchMeals(url)))
    }
}
export const dislikeMeal = function(url, id){
    return dispatch => {
        let elementUrl = `${url + '/' + id}` 
        fetch(elementUrl, {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Authorization': JSON.parse(sessionStorage.token).token
            }
        })
        .then(meal => dispatch(fetchMeals(url)))
    }
}
// export const searchMeal = function(url){
//     return dispatch => {
//         fetch(url)
//     }
// }