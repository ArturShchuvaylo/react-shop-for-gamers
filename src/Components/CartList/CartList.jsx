import React from "react";
import CartListItem from "../CartListItem/CartListItem";

const CartList = ({ cart, handleCart, removeFromCart, getTotal, addItemToCart }) => {
    return (
        <div >

            <ul className="collection cart-list">
                <li className="collection-item  active">
                    <div className="total">
                        <h5>Cart</h5>
                        <div onClick={() => handleCart()} className="price-span">
                            <i className="material-icons">close</i>
                        </div>
                    </div>


                </li>
                {
                    (cart.length <= 0) ?
                        <li
                            key={cart.id}
                            className="collection-item ">
                            <div className="total">
                                <h5>Cart is empty...</h5>

                            </div>
                        </li>
                        : cart.map((elem) => {
                            return <CartListItem
                                addItemToCart={(quont) => addItemToCart(elem, quont)}
                                removeFromCart={() => removeFromCart(elem.id)}
                                elem={elem} />
                        })
                }
                <li className="collection-item active">
                    <div className="total">
                        <h5>Total</h5>
                        <div className="price-span">{getTotal(cart)}$</div>
                    </div>
                </li>
            </ul>


        </div>
    );
}


export default CartList;