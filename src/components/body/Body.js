import Menu from "./Menu";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import { Route, Redirect } from "react-router";

const Body = () => {
    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Redirect from="/" to="/home" />
        </div>
    );
}

export default Body;