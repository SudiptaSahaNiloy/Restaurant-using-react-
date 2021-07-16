import { Component } from "react";
import Dishes from "../../data/Dishes";
import COMMENTS from "../../data/Comments";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import '../../stylesheet/Menu.css'

class Menu extends Component {
    state = {
        dishes: Dishes,
        comments: COMMENTS,
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
        const menu = this.state.dishes.map((item) => {
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
            const comments = this.state.comments.filter((comment) => {
                return comment.dishId === this.state.selectedDish.id;
            })
            dishDetail = <DishDetail comments={comments} dish={this.state.selectedDish} />
        }

        // controling all the stuff in the body
        return (
            <div className="container">
                <CardColumns className="grid-container">
                    {menu}
                </CardColumns>
                <Modal isOpen={this.state.modalOpen} onClick={this.modelOpenHandler}>
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

export default Menu;