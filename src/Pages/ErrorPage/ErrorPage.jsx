import React from 'react'
import ErrorImg from "../Images/ErrorImg.svg"

const ErrorPage = () => {
    return (
        <section
            className="min-h-screen text-center bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: `url(${ErrorImg})` }}
        >
            404
        </section>
    )
}

export default ErrorPage