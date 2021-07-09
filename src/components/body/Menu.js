import { Component } from "react";
import Dishes from "../../data/Dishes";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";

class Menu extends Component {
    state = {
        dishes: Dishes,
        selectedDish: null
    }

    // method to show selected dish
    onDishSelect = (dish) => {
        this.setState({
            selectedDish: dish
        });
    }

    // rendering it to DOM
    render() {
        // mapping all the dishes from the menu
        const menu = this.state.dishes.map((item) => {
            return (
                <MenuItem
                    dish={item}
                    key={item.id}
                    DishSelect={this.onDishSelect} />
            );
        })

        // setting the value of selected dish in dishDetail
        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail = <DishDetail dish={this.state.selectedDish} />
        }

        // controling all the stuff in the body
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;