import * as ActionTypes from './ActionTypes';
import DISHES from '../data/Dishes.js';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment,
    }
})

export const loadDishes = (dishes) => {
    return {
        type: ActionTypes.LOAD_DISHES,
        payload: dishes
    }
}

export const dishesLoading = () => {
    return {
        type: ActionTypes.DISHES_LOADING,
    }
}

export const fetchDishes = () => {
    return (dispatch) => {
        dispatch(dishesLoading());
        setTimeout(() => {
            dispatch(loadDishes(DISHES));
        }, 3000);
    }
}

