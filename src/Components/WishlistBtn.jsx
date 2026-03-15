// Actions
import { toggleWishlist } from "../Pages/Wishlist/WishlistSlice"

// Hooks
import { useDispatch, useSelector } from "react-redux"



// React Icons
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const WishlistBtn = ({ product, position }) => {

    const wishlist = useSelector((state) => state.wishlist.wishlist)

    const dispatch = useDispatch();


    const checkIsInWishlist = wishlist.some(
        (item) => item.id === product.id
    );


    return (
        <button className={` ${position} top-2 right-2  bg-white p-2 rounded-full hover:scale-105 transition-transform duration-200`}
            onClick={() => dispatch(toggleWishlist(product))}
        >
            {checkIsInWishlist ? (<FaHeart className='text-lg md:text-xl ' />) : (<FaRegHeart className='text-lg md:text-xl ' />)}
        </button>
    )
}

export default WishlistBtn
