import { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import '../../stylesheet/Menu.css'
import { connect } from "react-redux";
import * as ActionTypes from '../../Redux/ActionTypes.js';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch({
            type: ActionTypes.ADD_COMMENT,
            payload: {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment,
            }
        })
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

    // method to toggle modal state
    modelOpenHandler = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    // method to show selected dish
    onDishSelect = (dish) => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });
    }

    // rendering it to DOM
    render() {
        // changing the title to dynamic
        document.title = "Menu";
        // mapping all the dishes from the menu
        const menu = this.props.dishes.map((item) => {
            return (
                <MenuItem
                    className="grid-item"
                    dish={item}
                    key={item.id}
                    DishSelect={this.onDishSelect} />
            );
        })

        // setting the value of selected dish in dishDetail
        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.props.comments.filter((comment) => {
                return comment.dishId === this.state.selectedDish.id;
            })
            dishDetail = <DishDetail
                comments={comments}
                dish={this.state.selectedDish}
                addComment={this.props.addComment} />
        }

        // controling all the stuff in the body
        return (
            <div className="container">
                <CardColumns className="grid-container">
                    {menu}
                </CardColumns>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalBody>
                        {dishDetail}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.modelOpenHandler}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);