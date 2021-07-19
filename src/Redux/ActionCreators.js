import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import { baseURL } from './baseURL'

// section for comment action start here
export const addComment = (dishId, rating, author, comment) => {
    return (dispatch) => {
        const newComment = {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
        newComment.date = new Date().toISOString();

        axios.post(baseURL + 'comments', newComment)
            .then(response => response.data)
            .then(comment => dispatch(commentConcat(comment)));
    }
}

export const commentConcat = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
})

export const loadComments = (comments) => {
    return {
        type: ActionTypes.LOAD_COMMENTS,
        payload: comments
    }
}

export const commentsLoading = () => {
    return {
        type: ActionTypes.COMMENT_LOADING
    }
}

export const fetchComments = () => {
    return (dispatch) => {
        dispatch(commentsLoading());

        // fetch comments from server
        axios.get(baseURL + "comments")
            .then(response => response.data)
            .then(comments => dispatch(loadComments(comments)))
    }
}
// section for comment action end here


// section for dish action start here
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

export const dishesFailed = (errorMsg) => {
    return {
        type: ActionTypes.DISHES_FAILED,
        payload: errorMsg
    }
}

export const fetchDishes = () => {
    return (dispatch) => {
        dispatch(dishesLoading());

        // fetch info from the server
        axios.get(baseURL + 'dishes')
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)))
            // .catch(error => { console.log(error.message) })
            .catch(error => { dispatch(dishesFailed(error.message)) })
    }
}
// section for dish action end here


