

const Footer = () => {
    return (
        <footer className="bg-white py-[100px] lg:px-[150px]">
            <div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold pb-2">Gadget Heaven</h1>
                    <p className="opacity-[0.7]">Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <hr className="opacity-[0.1] my-5" />
                <div className="flex flex-col lg:flex-row justify-evenly gap-y-2">
                    <ul className="text-center">
                        <li className="font-bold">Service</li>
                        <li className="opacity-[0.7]">Product Support</li>
                        <li className="opacity-[0.7]">Order Tracking</li>
                        <li className="opacity-[0.7]">Shipping & Delivery</li>
                        <li className="opacity-[0.7]">Return</li>
                    </ul>
                    <ul className="text-center">
                        <li className="font-bold">Company</li>
                        <li className="opacity-[0.7]">About Us</li>
                        <li className="opacity-[0.7]">Careers</li>
                        <li className="opacity-[0.7]">Contact</li>
                    
                    </ul>
                    <ul className="text-center">
                        <li className="font-bold">Legal</li>
                        <li className="opacity-[0.7]">Terms of Service</li>
                        <li className="opacity-[0.7]">Privacy Policy</li>
                        <li className="opacity-[0.7]">Cookie Policy</li>
                        
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;