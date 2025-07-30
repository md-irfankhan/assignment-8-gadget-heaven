import BannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="max-w-[1300px] mx-auto relative -top-16 p-2 rounded-2xl border border-base-200 bg-base-300/[0.6] backdrop-blur-md lg:mb-60">
            <div className='bg-[#9538E2] rounded-2xl pt-25 lg:pb-70'>
                <div className='flex max-w-[340px] mx-auto gap-2 flex-col text-white justify-center items-center text-center'>
                    <h1 className="font-bold text-3xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="text-[13px]">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="bg-white text-purple-600 font-bold rounded-full px-[25px] py-[10px]">Shop Now</button>

                </div>
                <div className='max-w-[900px] max-h-[500px] p-3 flex lg:-bottom-[250px] mx-auto relative lg:absolute lg:left-50 border border-gray-400 bg-gray-400/[0.5] backdrop-blur-2xl rounded-2xl mt-3'>
                    <img className='rounded-2xl' src={BannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;