import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <h3 className="header-title">
                <a href="#">
                Game of Thrones DB
                </a>
            </h3>
            <ul className="header-list">
                <li>
                    <a href="#">Characters</a>
                </li>
                <li>
                    <a href="#">Houses</a>
                </li>
                <li>
                    <a href="#">Books</a>   
                </li>
            </ul>
        </div>
    );
};

export default Header;