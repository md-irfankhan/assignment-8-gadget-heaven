
import ClearIcon from '@mui/icons-material/Clear';
import { useLocation } from 'react-router';

const CartCard = ({ product ,handleCartRemove,handleWishListRemove}) => {
    const { product_title, product_image, price } = product
    const location =useLocation().pathname;

    return (
        <div className="flex flex-col gap-2 lg:flex-row  p-4 max-w-[1250px] mx-auto bg-white rounded-2xl">
            <div className="bg-base-300 py-3 px-6 rounded flex justify-center items-center"><img className="h-15" src={product_image} alt="" /></div>
            <div className="flex-1">
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-[24px]'>{product_title}</h1>
                    <button onClick={() =>location=='/dashboard/cart'? handleCartRemove(product.product_id,product.price):handleWishListRemove(product.product_id)}  className='border hover:bg-red-300 border-red-500 p-1 text-red-500 rounded-full'><ClearIcon></ClearIcon></button>
                </div>
                <p className='text-[18px] opacity-[0.6]'>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                <p className='font-semibold text-[24px]'>Price:${price}</p>
            </div>
        </div>
    );
};

export default CartCard;