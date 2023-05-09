import React from "react";


const ItemOfGoods = ({ name, image, description, price, addItemToCart
}) => {
    return (
        <div className="card item z-depth-3">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={image} alt='oops, here is must be a pic...' />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{name}</span>
            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addItemToCart(1)}>Add to cart</button>
                <span className="right" style={{ fontSize: '25px' }}>{price}$</span>
            </div>

        </div>

    );
}
export default ItemOfGoods;