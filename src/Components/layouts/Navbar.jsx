import React from 'react';
import '../scss/navbar.scss'

const Navbar = () => {
    const navbar = {
        "navlinks": [
            {
                "id": 1,
                "name": "Home",
                "link": "/"
            },
            {
                "id": 2,
                "name": "Signin",
                "link": "/signin"
            },
            {
                "id": 3,
                "name": "Dashboard",
                "link": "/dashboard"
            },
        ]
    };
    return(
        <nav className="navbar">
            <h1>KingdomCome</h1>
            {navbar.navlinks.map(nav => (
                <ul key={nav.id}>
                    <li>
                        <a href={nav.link}>{nav.name}</a>
                    </li>
                </ul>
            ))}
        </nav>
    );
};

export default Navbar;
