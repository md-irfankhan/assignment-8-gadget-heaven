import { Helmet } from "react-helmet-async";
import { Link } from "react-router";


const Card = ({ product }) => {
    const { product_title, product_image, price } = product
    return (

        <div className="bg-white shadow-sm h-87 rounded-2xl p-3">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="h-[180px] bg-base-300 w-auto flex justify-center items-center rounded-2xl">
                <img className=" h-[150px]" src={product_image} alt="" />
            </div>
            <div className="flex flex-col gap-2 mt-1">
                <h3 className="font-bold text-[20px]">{product_title}</h3>
                <p className="opacity-[0.7] font-medium">Price:{price} $</p>
                <div>
                    <button className="border hover:bg-indigo-500/[0.3] border-[#9538E2] rounded-full text-[#9538E2] px-[19px] py-[10px] shadow font-medium"> <Link to={`/product/${(product.product_id).toLowerCase()}`}>View Details </Link></button>
                </div>
            </div>
        </div>
    );
};

export default Card;