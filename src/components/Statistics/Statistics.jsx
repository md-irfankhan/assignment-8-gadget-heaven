import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

const Statistics = () => {
    const products = useLoaderData()
    const [productTitle, setProductTitle] = useState([])
    const [productPrice, setProductPrice] = useState([])

    useEffect(() => {
        const product_titles = products.map(el => el.product_title)
        setProductTitle(product_titles)
        console.log(product_titles);
        const product_prices = products.map(el => el.price)
        setProductPrice(product_prices)
    }, [])

    return (
        <div>
            <div className="bg-[#9538E2] text-white text-center pt-7 pb-7">
                <h1 className="font-bold text-2xl pb-2">Statistics</h1>
                <p className="text-[14px] opacity-[0.8] pb-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            </div>
            <div>
                <BarChart
                    xAxis={[{ data: [...productTitle] }]}
                    series={[{ data: [...productPrice] }]}
                    height={300}
                />
            </div>

        </div>
    );
};

export default Statistics;