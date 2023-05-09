import React from "react";

const CartListItem = ({ elem, removeFromCart, quantity, price, addItemToCart
}) => {
    return (
        <li className="collection-item avatar">
            <img src={elem.image} alt="" className="circle" />
            <span className="title">{elem.name}</span>
            <div>
                <button onClick={() => addItemToCart(-1)}>-</button>

                <span>{elem.quantity}</span>
                <button onClick={() => addItemToCart(1)}>+</button>
            </div>
            <p>
                {elem.quantity * elem.price}$
            </p>
            <button onClick={() => removeFromCart()} className="secondary-content">
                <i className="material-icons">close</i>
            </button>
        </li>
    );
}


export default CartListItem;