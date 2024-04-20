import { Component, useEffect, useState } from "react"
import '../styles/globals.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Cart from "../components/Cart"

function MyApp({ Component, pageProps }) {

    const [cart, setCart] = useState({});
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        console.log("i am from _app.js");

        try {
            if (localStorage.getItem("cart")) {
                setCart(JSON.parse(localStorage.getItem("cart")))
                saveCart(JSON.parse(localStorage.getItem("cart")))
            }

        } catch (error) {
            console.error(error)
            localStorage.clear();
        }

    }, [])

    const saveCart = (myCart) => {
        localStorage.setItem("cart", JSON.stringify(myCart))
        let subt = 0;
        let keys = Object.keys(myCart)
        for (let i = 0; i < keys.length; i++) {
            subt += myCart[keys[i]].price * myCart[keys[i]].qty;

        }
        setSubTotal(subt)
    }

    const addToCart = (itemCode, qty, price, name, size, variant) => {
        let newCart = cart;
        if (itemCode in cart) {
            newCart[itemCode].qty = cart[itemCode].qty + qty
        }
        else {
            newCart[itemCode] = { qty: 1, price, name, size, variant }
        }
        setCart(newCart)
        saveCart(newCart)
    }

    const clearCart = () => {
        setCart({})
        saveCart({})
    }

    const removeFromCart = () => {
        let newCart = JSON.parse(JSON.stringify(cart))
        if (itemCode in cart) {
            newCart[itemCode].qty = newCart[itemCode].qty - qty
        }
        else {
            newCart[itemCode] = { qty: 1, price, name, size, variant }
        }

        setCart(newCart)
        saveCart(newCart)
    }

    return <>
        <Cart cart={cart} saveCart={saveCart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
        <Navbar cart={cart} saveCart={saveCart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
        <Component cart={cart} saveCart={saveCart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
        <Footer cart={cart} saveCart={saveCart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    </>
}


export default MyApp