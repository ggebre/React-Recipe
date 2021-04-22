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