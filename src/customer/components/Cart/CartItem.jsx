import React from 'react'
import InconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@headlessui/react';
const CartItem = () => {
    return (
        <div className="p-5 shadow-lg border border-gray-200 rounded-md">

            <div className="flex items-center">

                <div className="w-[6rem] h-[6rem] lg:w-[9rem] lg:h-[9rem]">
                    <img
                        className="w-full h-full object-cover object-top"
                        src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/2/q/g/30-jeans-kneecut-black-crishtaliyo-2fashion-original-imagqy6gzmpwqkge.jpeg?q=70"
                        alt=""
                    />
                </div>

                <div className="ml-5 space-y-1">

                    <p className="font-semibold">
                        Men Slim Mid Rise Black Jeans
                    </p>

                    <p className="opacity-70">
                        Size: L, White
                    </p>

                    <p className="opacity-70 mt-2">
                        Seller: Crishtaliyo 2Fashion
                    </p>

                    <div className="flex space-x-5 items-center text-gray-900 pt-6">
                        <p className="font-semibold">₹199</p>
                        <p className="opacity-50 line-through">₹211</p>
                        <p className="text-green-600 font-semibold">5% off</p>
                    </div>

                </div>

            </div>

            <div className="lg:flex items-center lg:space-x-10 pt-4">

                <div className="flex items-center space-x-2">

                    <InconButton>
                        <RemoveCircleIcon />
                    </InconButton>

                    <span className="py-1 px-7 border rounded-sm">
                        3
                    </span>

                    <InconButton>
                        <AddCircleIcon sx={{ color: "rgb(145,85,253)" }} />
                    </InconButton>

                    <div className="ml-5">
                        <Button className="text-[rgb(145,85,253)]">
                            REMOVE
                        </Button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CartItem;
