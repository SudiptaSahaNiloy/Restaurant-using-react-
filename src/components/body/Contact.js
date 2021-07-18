import { Component } from "react";
import { connect } from "react-redux";
import { Control, Form, Errors, actions } from "react-redux-form";
import { FormGroup, Button, Label, Col } from 'reactstrap';
import '../../stylesheet/Contact.css';

// doc for react-redux-form 
// https://davidkpiano.github.io/react-redux-form/docs.html

// method to connect dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
        resetFeedbackForm: () => dispatch(actions.reset('feedback'))
    }
}

// method to validate input
const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(val)

class Contact extends Component {
    // method to handle the submit
    handleSubmit = (value) => {
        this.props.resetFeedbackForm();
    }

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
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name: </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                </Col>
                                <Errors
                                    className="text-danger"
                                    model=".firstName"
                                    show="touched"
                                    messages={
                                        { required: "Required" }
                                    }
                                />
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name:</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                </Col>
                                <Errors
                                    className="text-danger"
                                    model=".lastName"
                                    show="touched"
                                    messages={
                                        { required: "Required" }
                                    }
                                />
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Telephone Number:</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".telNum"
                                        name="telNum"
                                        placeholder="Telephone Number"
                                        className="form-control"
                                        validators={{
                                            required,
                                            isNumber
                                        }}
                                    />
                                </Col>
                                <Errors
                                    className="text-danger"
                                    model=".telNum"
                                    show="touched"
                                    messages={{
                                        required: "Required, ",
                                        isNumber: "Invalid number"
                                    }
                                    }
                                />
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email Address:</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="form-control"
                                        validators={{
                                            required,
                                            validEmail,
                                        }}
                                    />
                                </Col>
                                <Errors
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    messages={{
                                        required: "Required, ",
                                        validEmail: "Invalid Email"
                                    }}
                                />
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                            />
                                            <strong> May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select
                                        model=".contactType"
                                        className="form-control"
                                        name="contactType">
                                        {/* options */}
                                        <option>Telephone</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback: </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".message"
                                        name="message"
                                        placeholder="Message"
                                        rows="12"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                </Col>
                                <Errors
                                    className="text-danger"
                                    model=".message"
                                    show="touched"
                                    messages={{
                                        required: "Required",
                                    }
                                    }
                                />
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


export default connect(null, mapDispatchToProps)(Contact);