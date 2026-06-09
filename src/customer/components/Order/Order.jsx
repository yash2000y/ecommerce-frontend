import React from 'react'
import { Grid } from '@mui/material'
import OrderCard from './OrderCard'

const orderStatus = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Canceled", value: "canceled" },
    { label: "Returned", value: "returned" },
]

const Order = () => {
    return (
        <div className="lg:px-20 px-5">
            <Grid container spacing={5}>
                <Grid size={{ xs: 12, md: 3 }}>
                    <div className="h-auto border border-gray-100 shadow-lg bg-white p-5 sticky top-5 my-8">
                        <h1 className=" font-bold text-lg">Filter</h1>

                        <div className="space-y-4 mt-10">
                            <h1 className="font-semibold">ORDER STATUS</h1>

                            {orderStatus.map((option) =>
                                <div key={option.value}
                                    className="flex items-center">
                                    <input defaultValue={option.value} type="checkbox"
                                        className="h-4 w-4 border-gray-300
                                        text-indigo-600 focus:ring-indigo-500"/>
                                    <label className="ml-3 text-sm text-gray-600" htmlFor={option.value}>
                                        {option.label}
                                    </label>
                                </div>)}

                        </div>

                    </div>
                </Grid>
                <Grid size={{ xs: 12, md: 9 }} className="my-8">
                    <div className=" space-y-5">
                        {[1, 1, 1, 1].map((item, index) => (
                            <OrderCard key={index} />
                        ))}

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Order
