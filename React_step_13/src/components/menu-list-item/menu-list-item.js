import React from 'react';
import { Link } from 'react-router-dom';
import './menu-list-item.scss';

const MenuListItem = ( {menuItem}) => {
    const {title, price, url, category} = menuItem;
    
    return (
        <>
            <li className="menu__item">
                <Link to = {`/${menuItem.id}`}>
                    <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <button className="menu__btn">Add to cart</button>
                    <span className = {`menu__category_Img ${category}`}></span>
                </Link>
            </li>
        
        </>
    )
}


export default MenuListItem;