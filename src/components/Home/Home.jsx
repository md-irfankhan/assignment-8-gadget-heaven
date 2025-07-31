
import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
const Home = () => {
    const [product, setProduct] = useState([]);
    const [filProduct, setFilProduct] = useState([]);

    const [active, setActive] = useState(0);
    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setFilProduct(data);
            });

    }, [])


    const category = ['All Products', ... new Set(product.map(category => category.category))]
    // console.log(category);
    const handleCategory = (idx, category) => {
        setActive(idx);
        if (idx != 0) {
            const filtered = product.filter(element => element.category == category);
            setFilProduct(filtered);
        }else{
             setFilProduct(product)
        }
       
       
     
        console.log(filProduct);
        
    }

   


    return (
        <div>
            <Banner></Banner>
            <div>
                <h1 className='font-bold text-3xl text-center py-3'>Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className='flex max-w-[1250px] mx-auto'>
                {/* Category  */}
                <div className='bg-white rounded-2xl p-4 flex lg:flex-col flex-wrap gap-3'>

                    {
                        category.map((category, idx) => <button key={idx} onClick={() => handleCategory(idx, category)} className={`rounded-full bg-base-200 py-[11px] px-[20px] ${active===idx ? 'active':''}`}>{category}</button>)
                    }

                </div>
                {/* Display  */}
                <div className='flex-1'>
                    

                </div>
            </div>
        </div>
    );
};

export default Home;