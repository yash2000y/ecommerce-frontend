import { Button } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Box, Grid, LinearProgress, Rating } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import { mens_kurta } from '../../../Data/mens_kurta'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import { useNavigate } from 'react-router-dom'
const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
        { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
        { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
    ],
    sizes: [

        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },

    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
    const navigate = useNavigate();

    const handleAddToCart = () => {
        navigate("/cart")
    }

    return (
        <div className="bg-white ">
            <div className="pt-6 mx-20">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10 pb-1">
                    {/* Image gallery */}
                    <div className="flex flex-col item-center px-4 sm:px-6 lg:px-30">
                        <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                alt={product.images[0].alt}
                                src={product.images[0].src}
                                className="row-span-2 aspect-3/4 size-full rounded-lg object-cover "
                            />
                        </div>
                        <div className="flex flex-wrap space-x-5 jstify-center ">
                            {product.images.map((item, index) =>
                                <div
                                    key={index}
                                    className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                                    <img
                                        alt={item.src.alt}
                                        src={item.src}
                                        className="col-start-2 aspect-3/2 size-full rounded-lg object-cover "
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Product info */}
                    <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-6">
                        <div className="lg:col-span-2 ">
                            <h1 className="text-lg lg:text-xl font-semibold text-gray-900 ">
                                Universaloutfit
                            </h1>
                            <h1 className="text-lg lg:text-xl text-gray-900 opacity-50 pt-1">
                                Casual Puff Sleeves Solid Women White Top
                            </h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>

                            <div className="flex space-x-5 item-center text-lg lg:text-xl text-gray-900 mt-6">
                                <p className="font-semibold">₹199</p>
                                <p className='opacity-50 line-through'>₹211</p>
                                <p className="text-green-600 font-semibold">5% off</p>

                            </div>
                            {/* Reviews */}
                            <div className="mt-6  ">
                                <div className="flex items-center space-x-3 mt-3">
                                    <Rating name="read-only" value={5.5} readOnly />
                                    <p className="opacity-50 text-sm">54540 Ratings</p>
                                    <p className="ml-3 text-sm font-medium text-indigo-600 
                                    hover:text-indigo-500">3870 Reviews
                                    </p>
                                </div>
                            </div>

                            <form className="mt-10">


                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>

                                    </div>

                                    <fieldset aria-label="Choose a size" className="mt-4">
                                        <div className="grid grid-cols-4 gap-3">
                                            {product.sizes.map((size, index) => (
                                                <label
                                                    key={index}
                                                    aria-label={size.name}
                                                    className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                                                >
                                                    <input
                                                        defaultValue={size.id}
                                                        defaultChecked={size === product.sizes[2]}
                                                        name="size"
                                                        type="radio"
                                                        disabled={!size.inStock}
                                                        className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                                    />
                                                    <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                                                        {size.name}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </fieldset>
                                </div>

                                <button onClick={handleAddToCart} className="mt-5 bg-[#9155fd] hover:bg-[#7e46e8] text-white font-bold py-3 px-4 rounded">
                                    Add To Cart
                                </button>
                            </form>
                        </div>

                        <div className="py-4 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* rating and reviews */}
                <section className="pt-8 pb-8 ">
                    <h1 className="font-semibold text-lg pb-4">
                        Recent Review & Rating
                    </h1>
                    <div className="border border-gray-200  p-5">
                        <Grid container spacing={7}>
                            <Grid size={7}>
                                <div className="space-y-5">
                                    {[1, 1, 1].map((item) => <ProductReviewCard />)}
                                </div>
                            </Grid>

                            <Grid size={5} >
                                <h1 className="text-xl font-semibold pb-2">Product Ratings</h1>
                                <div className="flex item-center space-x-3">
                                    <Rating value={4.6} readOnly precision={0.5} />
                                    <p className="opacity-60">54890 Ratings</p>
                                </div>

                                <Box className="mt-5 space-y-3">

                                    <div className="flex items-center gap-4">

                                        <p className="w-24 text-sm m-0">
                                            Excellent
                                        </p>
                                        <div className="flex-1 flex items-center pt-1">
                                            <LinearProgress
                                                className="flex-1"
                                                sx={{
                                                    width: "100%",
                                                    bgcolor: "#d0d0d0",
                                                    borderRadius: 4,
                                                    height: 7
                                                }}
                                                variant="determinate"
                                                value={40}
                                                color="success"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">

                                        <p className="w-24 text-sm m-0">
                                            Very Good
                                        </p>
                                        <div className="flex-1 flex items-center pt-1">
                                            <LinearProgress
                                                className="flex-1"
                                                sx={{
                                                    width: "100%",
                                                    bgcolor: "#d0d0d0",
                                                    borderRadius: 4,
                                                    height: 7
                                                }}
                                                variant="determinate"
                                                value={30}
                                                color="success"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">

                                        <p className="w-24 text-sm m-0">
                                            Good
                                        </p>
                                        <div className="flex-1 flex items-center pt-1">
                                            <LinearProgress
                                                className="flex-1"
                                                sx={{
                                                    width: "100%",
                                                    bgcolor: "#d0d0d0",
                                                    borderRadius: 4,
                                                    height: 7
                                                }}
                                                variant="determinate"
                                                value={25}
                                                className="primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">

                                        <p className="w-24 text-sm m-0">
                                            Average
                                        </p>
                                        <div className="flex-1 flex items-center pt-1">
                                            <LinearProgress
                                                className="flex-1"
                                                sx={{
                                                    width: "100%",
                                                    bgcolor: "#d0d0d0",
                                                    borderRadius: 4,
                                                    height: 7
                                                }}
                                                variant="determinate"
                                                value={20}
                                                color="warning"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">

                                        <p className="w-24 text-sm m-0">
                                            Poor
                                        </p>
                                        <div className="flex-1 flex items-center pt-1">
                                            <LinearProgress
                                                className="flex-1"
                                                sx={{
                                                    width: "100%",
                                                    bgcolor: "#d0d0d0",
                                                    borderRadius: 4,
                                                    height: 7
                                                }}
                                                variant="determinate"
                                                value={15}
                                                color="error"
                                            />
                                        </div>
                                    </div>

                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </section>
                {/* similar products */}
                <section className="pt-10 ">

                    <h1 className="py-5 text-xl font-bold">Similar Products</h1>

                    <div className="flex flex-wrap space-y-5">
                        {mens_kurta.map((item) => <HomeSectionCard product={item} />)}
                    </div>


                </section>


            </div>
        </div>
    )
}
