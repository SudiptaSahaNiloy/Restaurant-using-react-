import { Component } from "react";
import Dishes from "../../data/Dishes";
import MenuItem from "./MenuItem";

class Menu extends Component {
    state = {
        dishes: Dishes
    }

    // rendering it to DOM
    render() {
        // mapping all the dishes from the menu
        const menu = this.state.dishes.map((item) => {
            return (
                <MenuItem dish={item} />
            );
        })

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;