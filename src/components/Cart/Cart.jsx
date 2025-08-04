import { useEffect, useState } from "react";
import { getCart, saveCart } from '../../db/ldb'
import SwapVertIcon from '@mui/icons-material/SwapVert';
import CartCard from "../CartCard/CartCard";
import { useContext } from 'react';
import { CartContext } from '../../App';
import { useCallback } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
const Cart = () => {
    const [product, setProduct] = useState([])
    const cartLs = getCart();
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const { lcart, setLCart } = useContext(CartContext)
    const products = useLoaderData();

    // useEffect(() => {
    //     fetch('/api.json')
    //         .then(res => res.json())
    //         .then(data => setProduct(data));
    // }, []);
    console.log(products);

    console.log(cart);

    useEffect(() => {

        const saveCart = []
        if (products.length !== 0) {
            for (let i of cartLs) {
                console.log(i);

                const filtered = products.find(el => i == el.product_id)
                console.log(filtered);

                saveCart.push(filtered)
            }

        }
        setCart(saveCart)



    }, [])
    console.log(cart);

    useEffect(() => {
        let totals = 0
        if (cart.length !== 0) {
            cart.map(el => {

                totals = totals + el.price
            })
            setTotal(totals)
        }

    }, [cart,lcart])

    const handleCartRemove = (id,price) => {
        let ccart = cartLs;
        ccart.splice(ccart.indexOf(id), 1)
        // setCart(ccart)
        saveCart(ccart);

        setLCart(ccart)
        toast.success('Product Removed')
        const savedCart = []
        if (products.length !== 0) {
            for (let i of ccart) {
                console.log(i);

                const filtered = products.find(el => i == el.product_id)
                console.log(filtered);
                 
                savedCart.push(filtered)
            }

        }
        setCart(savedCart)
        setTotal(total-price)


        // let totals = 0
        // if (ccart.length !== 0) {
        //     cart.map(el => {

        //         totals = totals + el.price
        //     })
        //     setTotal(totals)
        // }


    }

    return (
        <div className="pt-7 bg-base-200 pb-7">
            <div className="flex pb-4 flex-col lg:flex-row items-center justify-between max-w-[1250px] mx-auto">
                <div>
                    <h1 className="text-[24px] font-bold">Cart</h1>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-2">
                    <h3 className="text-[24px] font-bold">Total Cost:{total}$</h3>
                    <button className="flex items-center border border-[#9538E2] rounded-full py-1 px-3 text-[#9538E2] font-medium">Sort By Price
                        <SwapVertIcon></SwapVertIcon>
                    </button>
                    <button style={{
                        boxShadow: 'inset 0px 4px 50px 0px rgba(11, 11, 11, 0.15)'
                    }} className="bg-[#9538E2] py-1 px-3 rounded-full text-white font-medium">Purchase</button>
                </div>


            </div>
            <div className="flex flex-col gap-2">
                {
                    cart.map((productt, idx) => <CartCard key={idx} handleCartRemove={handleCartRemove} product={productt}></CartCard>)
                }
            </div>
        </div>
    );
};

export default Cart;