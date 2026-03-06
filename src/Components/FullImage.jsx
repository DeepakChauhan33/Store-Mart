import React from 'react'

// React Icons
import { RiFullscreenLine } from "react-icons/ri";


const FullImage = ({ showImage, setShowImage, product }) => {
    return (
        <>
            {showImage && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
                    <img
                        src={product.image}
                        className="max-h-[90%] max-w-[90%]"
                    />

                    <button
                        className="absolute top-5 right-5 text-white text-2xl"
                        onClick={() => setShowImage(false)}
                    >
                        ✕
                    </button>
                </div>
            )}
        </>
    )
}

export default FullImage
