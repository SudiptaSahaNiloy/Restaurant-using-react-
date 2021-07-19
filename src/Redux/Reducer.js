import { combineReducers } from 'redux';
import * as ActionTypes from './ActionTypes';
import { InitialContactForm } from './Forms';
import { createForms } from 'react-redux-form';

// reducer to handle only dish state
const dishReducer = (dishState = { isLoading: false, dishes: [], errorMsg: null }, action) => {
    console.log(action);
    switch (action.type) {
        case ActionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: [],
                errorMsg: null
            }
        case ActionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload,
                errorMsg: null
            }
        case ActionTypes.DISHES_FAILED:
            return {
                ...dishState,
                isLoading: false,
                dishes: [],
                errorMsg: action.payload
            }
        default:
            return dishState;
    }
}

// reducer to handle only comment state
const commentReducer = (commentState = { isLoading: false, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            }
        case ActionTypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            }
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload
            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            }

        default:
            return commentState;
    }
}

// method for the reducer funtion in redux
export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback: InitialContactForm
    })
})
