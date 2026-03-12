// React Icons
import { RiHome2Line } from "react-icons/ri";
import { BiBox, BiStoreAlt } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { FaBoxOpen } from "react-icons/fa";


// HOOKS
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";





const BottomNavbar = () => {

    const isLogin = useSelector((state) => state.auth.isLogin);

    return (
        <nav>
            <div className='w-full h-17 shadow-[0_-1px_10px_rgba(0,0,0,0.1)] shadow-gray-300 bg-gray-900 text-2xl text-white  flex justify-around items-center fixed bottom-0 left-0 z-50'>
                <button >
                    <NavLink to="/">
                        <RiHome2Line />
                    </NavLink>
                </button>

                <button >
                    <NavLink to="/products">
                        <BiStoreAlt />
                    </NavLink>
                </button>

                <button>
                    <NavLink to="/cart">
                        <FiShoppingCart />
                    </NavLink>
                </button>

                <button>
                    <NavLink to="/orders">
                        <BiBox />
                    </NavLink>
                </button>

                <button>
                    <NavLink to="/login">
                        <CgProfile />
                    </NavLink>
                </button>





                {/* {isLogin ? (<button>
                    <NavLink to="/orders">
                        <BiBox />
                    </NavLink>
                </button>
                )
                    :
                    (<button>
                        <NavLink to="/login">
                            <CgProfile />
                        </NavLink>
                    </button>
                    )} */}



            </div>
        </nav>
    )
}

export default BottomNavbar
