import React, { useEffect, useState } from "react";
import GoodsList from "../GoodsList/GoodsList";
import Cart from "../Cart/Cart";
import { API_KEY, API_URL } from "../../config";
import Preloader from "../Preloader/Preloader";
import CartList from "../CartList/CartList";
import Alert from "../Alert/Alert";

const Main = () => {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [cart, setCarts] = useState([]);
    const [visiableCart, setVisiableCart] = useState(false);
    const [visiableAlert, setVisiableAlert] = useState('');

    const uniq = (arr) => {
        return arr.filter((obj, index, self) => {
            return self.findIndex((el) => el.id === obj.id) === index
        })
    }

    const cartItemUpdate = (cart, indexElement, quont) => {
        const updateCart = cart.map((elem, index) => {
            if (indexElement === index) {
                return {
                    ...elem,
                    quantity: elem.quantity + quont,
                }
            } else {
                return elem;
            }
        })
        if (updateCart[indexElement].quantity === 0) {
            setCarts([
                ...updateCart.slice(0, indexElement),
                ...updateCart.slice(indexElement + 1),
            ])
        }
        else {
            setCarts(updateCart)
        }


    }

    const addItemToCart = (elem, quont) => {
        const newItem = {
            ...elem,
            quantity: 1
        }
        let indexElement = cart.findIndex(cartItem => cartItem.id === elem.id);
        if (indexElement < 0) {
            setCarts([
                ...cart,
                newItem
            ])
        }
        else {
            cartItemUpdate(cart, indexElement, quont);
        }
        setVisiableAlert(elem.name)
    }


    const removeFromCart = (id) => {
        const result = cart.filter(elem => elem.id !== id);
        setCarts(result)
    }

    const handleCart = () => {
        setVisiableCart((prev) => !prev)
        console.log('work');
    }
    const getTotal = (arr) => {
        console.log('start');
        return arr.reduce((sum, elem) => {
            return sum += elem.price * elem.quantity
        }, 0)
    }

    const changeAlert = () => {
        setVisiableAlert('');
    }

    useEffect(() => {
        setLoading(true);
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        })
            .then(response => response.json())
            .then(result => {

                setGoods(uniq(result.featured))
                console.log(uniq(result.featured));
                setLoading(false);
            })
            .catch(error => {
                console.log('huina');
                setLoading(false);
                setError(true);
            })
    }, [])

    return (
        <main className="content container">

            <Cart quontity={cart.length} handleCart={handleCart} />
            {
                visiableCart ?
                    <CartList
                        addItemToCart={addItemToCart}
                        getTotal={getTotal}
                        removeFromCart={removeFromCart}
                        cart={cart}
                        handleCart={handleCart}
                    /> : null
            }
            {
                (visiableAlert) ? <Alert name={visiableAlert} changeAlert={changeAlert} /> : null
            }

            {
                loading ? <Preloader /> :
                    error ? 'ERROR' :
                        <GoodsList
                            addItemToCart={addItemToCart}
                            goods={goods} />
            }
        </main>
    );
}


export default Main;