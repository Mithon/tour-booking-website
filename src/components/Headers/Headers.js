import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Headers.css'

const Headers = () => {
    const { user, logout } = useFirebase();
    return (
        <div className="header">
            <div>
                <Link to="/homes">Home</Link>
                {user?.email && <Link to="/myorder">My Orders</Link>}
                {user?.email && <Link to="/ordermanage">Manage All Orders</Link>}
                {user?.email && <Link to="/offers">Add A New Service</Link>}

                {/* <Link to="/appoinment">Appoinment</Link>
                <Link to="/department">Department</Link>
                <Link to="/register">Register</Link> */}
                <Link to="/login">Login</Link>
                <span>{user.displayName}</span>
                {user?.email && <Button onClick={logout}>Log out</Button>}
            </div>

        </div>
    );
};

export default Headers;