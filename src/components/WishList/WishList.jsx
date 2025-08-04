import { getWishList } from "../../db/ldb";
import { useState,useEffect } from "react";
import CartCard from "../CartCard/CartCard";
const WishList = () => {
     const [product, setProduct] = useState([])
        const wishLs = getWishList();
        const [wish, setWish] = useState([])
      
        useEffect(() => {
           
            fetch('/api.json')
                .then(res => res.json())
                .then(data =>setProduct(data) );
                
        }, []);

        useEffect(()=>{
           const filtered=product.filter(el=>wishLs.includes(el.product_id))
           setWish(filtered)
        },[product])
   
    
    
        
    
    
    
        
    return (
        <div className="pt-7 bg-base-200 pb-7">
            <h1 className="text-[24px] font-bold pb-2">WishList</h1>


            <div className="flex flex-col gap-2">
                {
                    wish.map((productt, idx) => <CartCard key={idx} product={productt}></CartCard>)
                }
            </div>
        </div>
    );
};

export default WishList;