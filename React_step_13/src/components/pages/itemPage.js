import React, {Component} from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc/';
import Spinner from '../spinner';
import {menuLoaded, menuRequested, menuError} from '../../actions';

import './itemPage.css';

class ItemPage extends Component {

    componentDidMount() {
        if( this.props.menuItems.length === 0){
            this.props.menuRequested();

            const {RestoService} = this.props;
            RestoService.getMenuItems()
                .then(res => this.props.menuLoaded(res))
                .catch(error => this.props.menuError());
        }
    }

    render() {
        if(this.props.loading) {
            return (
                <div className = "item_page">
                    <Spinner/>
                </div>
            )
        }
        const item = this.props.menuItems.find(el => +el.id === +this.props.match.params.id)
        const{title, url, category, price} = item;

        return (
            <div className = "item_page">
                <div className="menu__item item_block">
                     <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <button className="menu__btn">Add to cart</button>
                    <span className = {`menu__category_Img ${category}`}></span> 
                </div>
            </div>
        );
    }
}

const mapStateToProps =  (state) =>{
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded: menuLoaded,
    menuRequested,
    menuError
}

export default WithRestoService ()( connect(mapStateToProps, mapDispatchToProps)(ItemPage) );