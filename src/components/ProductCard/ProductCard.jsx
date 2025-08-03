import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { addToCart } from '../../db/ldb';
import { useContext } from 'react';
import { CartContext } from '../../App';
import {  toast } from 'react-toastify';
const ProductCard = ({ product }) => {
    const { product_image, product_title, price, availability, description, Specification, rating } = product
    const {lcart,setLCart}=useContext(CartContext)
    const hanndleCart=(id)=>{
         addToCart(id);
         setLCart([...lcart,id])
         toast.success('Product added to cart');     
    }
    return (
        <div className="bg-white relative -top-24  max-w-[1200px] mx-auto flex p-[32px] gap-6 rounded-2xl flex-col lg:flex-row shadow-sm">
            <div className="bg-base-300 flex justify-center items-center rounded-2xl px-20">
                <img className="h-36 " src={product_image} alt="" />
            </div>
            <div className='flex-1 flex flex-col gap-2'>
                <h1 className='text-[28px] font-bold'>{product_title}</h1>
                <p className='font-semibold text-[20px] opacity-[0.7]'>Price:$ {price}</p>
               <div>
                 <button className='bg-[#309C081A] text-green-500 rounded-full border border-green-500 py-[7px] px-[14px]'>{availability ? 'In Stock' : 'Stock Out'}</button>
               </div>
                <p className='opacity-[0.6]'>{description}</p>
                <div>
                    <h1 className='font-bold'>Specification:</h1>
                    <ul className='opacity-[0.6]'>

                        {
                            Specification.map((spec,idx)=> <li key={idx}>{spec.key}:{spec.value}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold'>Rating:</h4>
                    <div className='flex gap-3 items-center'>
                         <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                         <span className='bg-base-200 font-medium px-2 py-1 rounded-full'>{rating}</span>
                    </div>
                    
                </div>
                <div className='flex gap-2'>
                    <button onClick={()=>{hanndleCart(product.product_id)}} className='bg-[#9538E2] text-white flex gap-1 items-center py-2 px-3 rounded-full'>Add To Card
                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                    </button>
                    <button className='border border-base-300 p-2 rounded-full'>
                        <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;