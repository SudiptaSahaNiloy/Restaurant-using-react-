import DISHES from '../data/Dishes';
import COMMENTS from '../data/Comments';
import { combineReducers } from 'redux';
import * as ActionTypes from './ActionTypes';

// reducer to handle only dish state
const dishReducer = (dishState = DISHES, action) => {
    switch (action.type) {
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
    comments: commentReducer
})
