import React from 'react';
import './menu-list-item.scss';

const MenuListItem = () => {
    return (
        <>
            <li className="menu__item">
                <div className="menu__title">Cesar salad</div>
                <img className="menu__img" src="https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg" alt="Cesar salad"></img>
                <div className="menu__category">Category: <span>salads</span></div>
                <div className="menu__price">Price: <span>12$</span></div>
                <button className="menu__btn">Add to cart</button>
            </li>
            <li className="menu__item">
                <div className="menu__title">Cesar salad</div>
                <img className="menu__img" src="https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg" alt="Cesar salad"></img>
                <div className="menu__category">Category: <span>salads</span></div>
                <div className="menu__price">Price: <span>12$</span></div>
                <button className="menu__btn">Add to cart</button>
            </li>
        </>
    )
}

export default MenuListItem;