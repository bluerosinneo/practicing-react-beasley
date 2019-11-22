import React from 'react';
import SignUpForm from '../signupform/SignUpForm';
import AttendeeList from '../attendeelist/AttendeeList';
import './Main.css'

function Main(props) {
    return (
        <div className="Main">
            <h3>Album release party</h3>

            <p>We hope to see <em>you</em> <strong>October 13</strong>!</p>

            <SignUpForm />

            <h1 className="dark">Pre-order now!</h1>
            <p className="dark">The cool kids will all be there</p>

            <AttendeeList />
        </div>
    );
}

export default Main;