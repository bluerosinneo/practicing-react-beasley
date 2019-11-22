import React, { Component } from 'react';
import './SignUpForm.css'

// function SignUpForm(props) {
class SignUpForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            attendee: {
                email: '',
                guests: 0,
            }
        };
    }

    handleChange = (event) => {
        // let attendeeClone = Object.assign({}, this.state.attendee);
        // console.log(attendeeClone);
        // console.log(event.target.value);
        // console.log(event.target.name);
        // attendeeClone[event.target.name] = event.target.value;

        let { attendee: attendeeClone } = {...this.state};

        attendeeClone[event.target.name] = event.target.value;

        this.setState({
            attendee: attendeeClone
        });

    } 

    render(){
        return (
            <form className="SignUpForm">
                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={this.state.attendee.email}
                    onChange={this.handleChange}
                />
                <input
                    name="guests"
                    placeholder="# of guests"
                    type="number"
                    value={this.state.attendee.guests}
                    onChange={this.handleChange}
                />
                <button>RSVP</button>
            </form>
        );
    }
}

export default SignUpForm;