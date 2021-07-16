import { Component } from "react";
import { Form, FormGroup, Button, Label, Input, Col } from 'reactstrap';
import '../../stylesheet/Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: 'Tel.',
            message: ""
        }
    }

    // method to handle the change of the methods
    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // method to toggle checkbox value
    handleToggleInput = () => {
        this.setState({
            agree: !this.state.agree
        })
    }

    // method to handle the submit
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    // method to check state
    // componentDidUpdate() {
    //     console.log(this.state);
    // }

    render() {
        // changing the title to dynamic
        document.title = "Contact"; 
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "25rem", textAlign: "left", paddingTop: "20px" }}>
                    <div className="col-12">
                        <h3>Send us your Feedback</h3><br />
                    </div>

                    {/* Form section starts here */}
                    <div className="col-12 col-md-7">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name: </Label>
                                <Col md={10}>
                                    <Input
                                        type="text"
                                        name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={(event) => this.handleInputChange(event)} />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name:</Label>
                                <Col md={10}>
                                    <Input
                                        type="text"
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={(event) => this.handleInputChange(event)} />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Telephone Number:</Label>
                                <Col md={10}>
                                    <Input
                                        type="tel"
                                        name="telnum"
                                        placeholder="Telephone Number"
                                        value={this.state.telnum}
                                        onChange={(event) => this.handleInputChange(event)} />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email Address:</Label>
                                <Col md={10}>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={this.state.email}
                                        onChange={(event) => this.handleInputChange(event)} />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={() => this.handleToggleInput()} />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input
                                        type="select"
                                        name="contactType"
                                        checked={this.state.contactType}
                                        onChange={(event) => this.handleInputChange(event)}>
                                        <option>Telephone</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback: </Label>
                                <Col md={10}>
                                    <Input
                                        type="textarea"
                                        name="message"
                                        placeholder="Message"
                                        value={this.state.message}
                                        rows="12"
                                        onChange={(event) => this.handleInputChange(event)} />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </FormGroup>
                            <br />
                        </Form>
                    </div>

                    {/* Form section ends here */}
                </div>
            </div>
        );
    }
}


export default Contact;