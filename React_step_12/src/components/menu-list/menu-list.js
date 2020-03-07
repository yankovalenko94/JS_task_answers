import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';

import './menu-list.scss';

class MenuList extends Component {

    render() {

        return (
            <ul className="menu__list">
                <MenuListItem/>
            </ul>
        )
    }
};


export default MenuList;