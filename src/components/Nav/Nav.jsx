
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Nav = () => {
    return (
        <div className="navbar bg-base-100 max-w-[1250px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>

                        <li><a>Statistics</a></li>
                        <li><a>Dashboard</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>

                    <li><a>Statistics</a></li>
                    <li><a>Dashboard</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className="indicator">
                    <span className="indicator-item rounded p-1 text-[12px] badge badge-secondary">12</span>
                     <a className="bg-white p-1 rounded-full"><ShoppingCartOutlinedIcon className='h-3 w-3'></ShoppingCartOutlinedIcon></a>
                </div>
                <div className="indicator">
                    <span className="indicator-item rounded p-1 text-[12px] badge badge-secondary">12</span>
                    <a className="bg-white p-1 rounded-full"><FavoriteBorderOutlinedIcon className='h-3 w-3'></FavoriteBorderOutlinedIcon></a>
                </div>
              
                
            </div>
        </div>
    );
};

export default Nav;