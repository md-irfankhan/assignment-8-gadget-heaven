import { useLoaderData, useParams } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import { Helmet } from "react-helmet-async";



const ProductPage = () => {
    const {productId}=useParams()
    
   
    const products=useLoaderData()
    const findP=products.find(product=>productId==(product.product_id).toLowerCase())
   
 
    
    
    
    return (
        <div className="bg-base-200">
        <Helmet>
            <title>{findP.product_title}</title>
        </Helmet>
        <div className="bg-[#9538E2] text-white text-center pt-7 pb-32">
            <h1 className="font-bold text-2xl pb-1">Product Details</h1>
            <p className="text-[14px] opacity-[0.8]">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        </div>
        <ProductCard product={findP}></ProductCard>
        </div>
    );
};

export default ProductPage;