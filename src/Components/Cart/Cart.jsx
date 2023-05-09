import React from "react";


const Cart = ({ quontity, handleCart }) => {
    return (

        <div onClick={() => handleCart()} className="btn-floating btn-large pulse cart">
            <i className="material-icons">shopping_cart</i>
            {
                (quontity > 0) ? <div className="count-cart" >{quontity}</div> : null
            }
        </div>
    );
}



export default Cart;