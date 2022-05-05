import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation( ) {
    return (
        <nav class="nav-bar">
            <Link to="/" className="link">Home</Link>
            <Link to="/customers" className="link">Customers</Link>
            <Link to="/deliverers" className="link">Deliverers</Link>
            <Link to="/orders" className="link">Orders</Link>
            <Link to="/order-waters" className="link">Order_Waters</Link>
            <Link to="/waters" className="link">Waters</Link>
        </nav>
    );
}
