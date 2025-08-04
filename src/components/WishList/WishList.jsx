import { getWishList, saveWishList } from "../../db/ldb";
import { useState, useEffect } from "react";
import CartCard from "../CartCard/CartCard";
import { useLoaderData } from "react-router";
import { useContext } from 'react';
import { CartContext } from "../../App";
import { Helmet } from "react-helmet-async";
const WishList = () => {
    const { lwish, setLWish } = useContext(CartContext)
    const wishLs = getWishList();
    const [wish, setWish] = useState([])
    const products=useLoaderData()
    // useEffect(() => {

    //     fetch('/api.json')
    //         .then(res => res.json())
    //         .then(data => setProduct(data));

    // }, []);

    useEffect(() => {
        const filtered = products.filter(el => wishLs.includes(el.product_id))
        setWish(filtered)
    }, [])


   const handleWishListRemove=(id)=>{
    const filtered=wish.filter(el=>el.product_id !==id);
    const lfiltered=lwish.filter(el=>el!==id)
    setLWish(lfiltered)
    saveWishList(lfiltered)
    setWish(filtered)

   }





    return (
        <div className="pt-7 bg-base-200 pb-7">
            <Helmet>
                <title>Wish List</title>
            </Helmet>
            <div className="max-w-[1250px] mx-auto">
                <h1 className="text-[24px] font-bold pb-2">WishList</h1>


                <div className="flex flex-col gap-2">
                    {
                      wish.length!==0?  wish.map((productt, idx) => <CartCard key={idx} product={productt} handleWishListRemove={handleWishListRemove}></CartCard>):<h1 className="text-2xl">No data here</h1>
                    }
                </div>
            </div>

        </div>
    );
};

export default WishList;