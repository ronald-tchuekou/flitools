import React, {useState} from 'react';
import Lang from "../../src/lang";

/**
 * Function to manage the cart notifications.
 * @param {string} lang
 * @returns {JSX.Element}
 * @constructor
 */
const Cart_manager = ({lang}) => {

    let [commands, setCommands] = useState([]);

    /**
     * Function that return the total amount.
     * @returns {string}
     */
    const getCountAmount = () => {
        // TODO
        return '0 FCFA';
    }

    return (
        <li className="nav-item dropdown dropdown-cart mr-25">
            <a className="nav-link" href="" data-toggle="dropdown"><i
                className="ficon" data-feather="shopping-cart"> </i>
                {commands.length !== 0 ? <span className="badge badge-pill badge-primary badge-up cart-item-count">{commands.length}</span> : <></>}
            </a>
            <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                <li className="dropdown-menu-header">
                    <div className="dropdown-header d-flex">
                        <h4 className="notification-title mb-0 mr-auto">{Lang.header.my_cart[lang]}</h4>
                        <div className="badge badge-pill badge-light-primary">{commands.length === 0 ? '' : commands.length} {Lang.header.command[lang]}</div>
                    </div>
                </li>
                <li className="scrollable-container media-list">
                    {commands.map((item, i) => {
                        return <CartItem key={i} lang={lang} item={item}/>;
                    })}
                </li>
                <li className="dropdown-menu-footer">
                    <div className="d-flex justify-content-between mb-1">
                        <h6 className="font-weight-bolder mb-0">Total:</h6>
                        <h6 className="text-primary font-weight-bolder mb-0">{getCountAmount()}</h6>
                    </div>
                    <a className="btn btn-primary btn-block" href="">{Lang.header.see_my_cart[lang]}</a>
                </li>
            </ul>
        </li>
    );
}

const CartItem = ({lang, item}) => {
    return (
        <div className="media align-items-center">
            <img className="d-block rounded mr-1"
                 src="app-assets/images/pages/eCommerce/1.png" alt="donuts"
                 width="62"/>
            <div className="media-body">
                <i className="ficon cart-item-remove" data-feather="x"> </i>
                <div className="media-heading">
                    <h6 className="cart-item-title"><a className="text-body" href="#"> Apple
                        watch 5</a></h6>
                    <small className="cart-item-by">By Apple</small>
                </div>
                <div className="cart-item-qty">
                    <div className="input-group">
                        <input className="touchspin-cart" type="number" value="1"/>
                    </div>
                </div>
                <h5 className="cart-item-price">$374.90</h5>
            </div>
        </div>
    );
}

export default Cart_manager;
