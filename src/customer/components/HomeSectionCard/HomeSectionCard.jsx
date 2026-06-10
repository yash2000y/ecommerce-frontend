import React from 'react'

const HomeSectionCard = ({ product }) => {
    return (
        <div
            className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg
            overflow-hidden w-[15rem] mx-3 border border-gray-200
            transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'
        >
            <div className='h-[13rem] w-[10rem] mt-3'>
                <img
                    className='object-cover object-top w-full h-full'
                    src={product.imageUrl}
                    alt={product.title}
                />
            </div>

            <div className='p-4 w-full'>
                <h3 className='text-lg font-medium text-gray-900'>
                    {product.brand}
                </h3>

                <p className='mt-2 text-gray-500 text-sm'>
                    {product.title}
                </p>

                <div className='flex items-center gap-2 mt-3 flex-wrap'>
                    <span className='font-bold text-lg text-black'>
                        ₹{product.discountedPrice}
                    </span>

                    <span className='text-gray-500 line-through text-sm'>
                        ₹{product.price}
                    </span>

                    <span className='text-green-600 font-semibold text-sm'>
                        {product.discountPersent}% off
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HomeSectionCard;








// import React from 'react'

// const HomeSectionCard = ({ product }) => {
//     return (
//         <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg
//      overflow-hidden w-[15rem] mx-3 border border-gray-200
//      transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'>

//             <div className='h-[13rem] w-[10rem]'>
//                 <img className='object-cover object-top w-full h-full'
//                     src={product.imageUrl}
//                     alt="" />
//             </div>
//             <div className='p-4 '>
//                 <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
//                 <p className='mt-2text-gray-500'>{product.title}</p>
//             </div>
//         </div>
//     );
// }

// export default HomeSectionCard;
