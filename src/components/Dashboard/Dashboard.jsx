import { Outlet } from "react-router";




const Dashboard =() => {
  
    return (
        <div>
            <div className="bg-[#9538E2] text-white text-center pt-7 pb-7">
            <h1 className="font-bold text-2xl pb-2">Dashboard</h1>
            <p className="text-[14px] opacity-[0.8] pb-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <div className='flex gap-2 items-center justify-center '>
                <button className='px-4 border border-white rounded-full py-1'>Cart</button>
                <button className='px-4 border border-white rounded-full py-1'>Wishlist</button>
            </div>
        </div>
         <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;