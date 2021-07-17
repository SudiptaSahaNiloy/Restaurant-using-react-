import { Component } from "react";

class Home extends Component {
    render() {
        // changing the title to dynamic
        document.title = "My Restaurant";
        return (
            <div></div>
        );
    }
}


export default Home;