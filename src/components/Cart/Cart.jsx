import { useEffect, useState } from "react";
import { getCart } from '../../db/ldb'
import SwapVertIcon from '@mui/icons-material/SwapVert';
import CartCard from "../CartCard/CartCard";
const Cart = () => {
    const [product, setProduct] = useState([])
    const cartLs = getCart();
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(() => {
        fetch('/api.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);


    useEffect(() => {
        const saveCart = []
        if (product.length !== 0) {
            for (let i of cartLs) {
                console.log(i);

                const filtered = product.find(el => i == el.product_id)
                saveCart.push(filtered)
            }

        }
        setCart(saveCart)



    }, [product])

    useEffect(() => {
        let totals=0
        cart.map(el => {
          
            totals=totals+el.price
        })
        setTotal(totals)
        
    }, [cart])

    // const filtered2= filtered.map(el=>{
    //     return {...el, quant:0}

    // });
    // const filtered
    // console.log(filtered2);

    // if(cartLs.length!==0){
    //    setCart(
    //     cart.map(el=>{
    //         cartLs.includes(el.product_id)?{...el,quant:el.quant+1}:el;
    //     })
    //    )
    // }
    // else{
    //     setCart([...cart,{..}])
    // }

    return (
        <div className="pt-7 bg-base-200">
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
                    cart.map((productt, idx) => <CartCard key={idx} product={productt}></CartCard>)
                }
            </div>
        </div>
    );
};

export default Cart;