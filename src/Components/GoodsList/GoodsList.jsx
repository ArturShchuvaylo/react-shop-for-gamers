import React from "react";
import ItemOfGoods from "../ItemOfGoods/ItemOfGoods";

const GoodsList = ({ goods, addItemToCart }) => {

    return (

        <div className="goods">
            {
                goods.map(elem => {
                    return (
                        <ItemOfGoods addItemToCart={(quont) => addItemToCart(elem, quont)} key={elem.id} {...elem} />
                    )
                })
            }
        </div>
    );
}


export default GoodsList;