import { Component } from "react";
import { Form, Button, Input, FormGroup } from 'reactstrap'

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // method to handle the submission
    handleSubmit = (event) => {
        this.props.addComment(this.props.dishId, this.state.rating, this.state.author, this.state.comment);

        this.setState({
            author: '',
            rating: '',
            comment: ''
        })
        event.preventDefault();
    }

    // method to handle on Change
    handleOnChange = (event) => {
        // console.log(event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="Your Name"
                        onChange={this.handleOnChange}
                        required />
                    <br />
                    <FormGroup>
                        <Input
                            type="select"
                            name="rating"
                            onChange={this.handleOnChange}
                            value={this.state.rating}>
                            <option>Rate</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <br />
                    <Input
                        type="textarea"
                        onChange={this.handleOnChange}
                        name="comment"
                        value={this.state.comment}
                        placeholder="Your Comment"
                        required />
                    <br />
                    <Button type="submit" color="success" >Submit Comment</Button>
                </Form>
            </div>
        )
    }
}

export default CommentForm;