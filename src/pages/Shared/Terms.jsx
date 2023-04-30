import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms</h2>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;