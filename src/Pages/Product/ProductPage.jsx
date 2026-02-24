import React from 'react'

const ProductPage = () => {
  return (
    <main className='w-full'>

        {/* Product page header */}
        <div className='border p-2 py-4'>
            <h2 className='text-3xl font-bold'>See Products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, autem!</p>
        </div>

        {/* COntainer for products */}
        <div className='border flex'>

            {/* Category container */}
            <div>
                <div>
                    <span>Category</span>
                </div>
                <div>

                    <div className='space-x-2'>
                        <label htmlFor="all Products"></label>
                        <input type="radio" />
                        <span>All Products</span>
                    </div>
                </div>
            </div>

            {/* Products Container */}
            <div>
                <p>52</p>
            </div>
        </div>
    </main>
  )
}

export default ProductPage
