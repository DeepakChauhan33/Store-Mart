// Hooks
import { useNavigate } from "react-router-dom";

// Icons
import { BsArrowLeft } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";


const Search = () => {




    const navigate = useNavigate();
    return (
        <section className="bg-purple-50 h-[100vh]">

            <div className="h-18 border flex items-center gap-3 sm:gap-5 lg:gap-8 p-2 sm:p-5 lg:p-7">

                <button
                    className="group text-2xl font-bold text-gray-800 md:p-2 rounded-full md:bg-gray-300"
                    onClick={() => navigate(-1)} >
                    <BsArrowLeft className="transition-transform hover:-translate-x-0.5 ease-in-out duration-300"
                        onClick={() => navigate(-1)} />
                </button>

                <div className="relative flex-1 flex items-center border">

                    <span className="absolute insert-y-0  left-2  items-center ">
                        <CiSearch size={20} />
                    </span>

                    <input type="text" placeholder="Search products..." className="pl-10 w-full rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
            </div>
        </section>
    )
}

export default Search
