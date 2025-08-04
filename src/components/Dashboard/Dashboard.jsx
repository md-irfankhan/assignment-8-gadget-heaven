import { NavLink, Outlet} from "react-router";
import './Dashboard.css'
import { Helmet } from "react-helmet-async";




const Dashboard =() => {
    
    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="bg-[#9538E2] text-white text-center pt-7 pb-7">
            <h1 className="font-bold text-2xl pb-2">Dashboard</h1>
            <p className="text-[14px] opacity-[0.8] pb-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <div className='flex gap-2 items-center justify-center '>
                <NavLink className={'px-4 border border-white rounded-full py-1'} to={'/dashboard/cart'}><button className='rounded-full '>Cart</button></NavLink>
                <NavLink className={'px-4 border border-white rounded-full py-1'} to={'/dashboard/wishlist'}>Wishlist<button className=' rounded-full '>Cart</button></NavLink>
                
            </div>
        </div>
         <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;