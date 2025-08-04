
import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import Card from '../Card/Card';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';
// import { Title } from 'react-head';

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
        } else {
            setFilProduct(product)
        }



        console.log(filProduct);

    }


    const location = useLocation()

    return (
        <>
            <Helmet key={location.pathname}>
                <title>Home</title>
            </Helmet>
            {/* <Title>Home</Title> */}
            <div className='bg-base-200'>

                <Banner></Banner>
                <div>
                    <h1 className='font-bold text-3xl text-center py-3'>Explore Cutting-Edge Gadgets</h1>
                </div>
                <div className='flex flex-col lg:flex-row max-w-[1250px] mx-auto gap-4 mb-5'>
                    {/* Category  */}
                    <div className=''>

                        <div className='bg-white rounded-2xl  p-4 flex lg:flex-col flex-wrap gap-3'>
                            {
                                category.map((category, idx) => <button key={idx} onClick={() => handleCategory(idx, category)} className={`rounded-full bg-base-200 py-[11px] px-[20px] ${active === idx ? 'actived' : ''}`}>{category}</button>)
                            }
                        </div>

                    </div>
                    {/* Display  */}
                    <div className='flex-1 grid grid-cols-1 lg:grid-cols-3 gap-3 '>
                        {
                            filProduct.map(product => <Card product={product}></Card>)
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;