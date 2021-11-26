import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css'

const Topbar = () => {
    return (
        <div>
            <div className="topright">
                <Link to="#">Head Office :   203 Fake St. Mountain View, San Francisco, California, USA</Link>
            </div>

        </div>
    );
};

export default Topbar;