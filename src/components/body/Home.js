import { Component } from "react";
import Loading from "./Loading";

class Home extends Component {
    render() {
        // changing the title to dynamic
        document.title = "My Restaurant";
        return (
            <div>
                <Loading />
            </div>
        );
    }
}


export default Home;