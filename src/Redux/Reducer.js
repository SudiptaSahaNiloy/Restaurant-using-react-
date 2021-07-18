import COMMENTS from '../data/Comments';
import { combineReducers } from 'redux';
import * as ActionTypes from './ActionTypes';
import { InitialContactForm } from './Forms';
import { createForms } from 'react-redux-form';

// reducer to handle only dish state
const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
    switch (action.type) {
        case ActionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: []
            }
        case ActionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload
            }
        default:
            return dishState;
    }
}

// reducer to handle only comment state
const commentReducer = (commentState = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            let payload = action.payload;
            payload.id = commentState.length;
            payload.date = new Date().toDateString();
            console.log(payload);
            return commentState.concat(payload)

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
