import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email"></input>
                <input type="password"></input>
                <br />
                <input type="submit" value="Submit"></input>
                <Link to="/login">Already Register?</Link>
            </form>
        </div>
    );
};

export default Register;