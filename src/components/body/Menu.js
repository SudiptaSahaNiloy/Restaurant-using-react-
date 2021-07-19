import { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button, Alert } from 'reactstrap';
import '../../stylesheet/Menu.css'
import { connect } from "react-redux";
import { addComment, fetchComments, fetchDishes } from "../../Redux/ActionCreators";
import Loading from "./Loading.js";

// method to connect with redux state
const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

// method to connect with redux Dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch(
            addComment(dishId, rating, author, comment)
        ),
        fetchdishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments())
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

    // method to execute after component mounts
    componentDidMount() {
        this.props.fetchdishes();
        this.props.fetchComments();
    }

    // rendering it to DOM
    render() {
        // console.log(this.props.dishes);
        if (this.props.dishes.isLoading === true) {
            return (
                <div>
                    <Loading />
                </div>
            );
        } else if (this.props.dishes.errorMsg != null) {
            return (
                <div>
                    <Alert color="danger">{this.props.dishes.errorMsg}</Alert>
                </div>
            )
        }
        else {
            // changing the title to dynamic
            document.title = "Menu";
            // mapping all the dishes from the menu
            const menu = this.props.dishes.dishes.map((item) => {
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
                const comments = this.props.comments.comments.filter((comment) => {
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);