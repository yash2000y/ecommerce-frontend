import React, { useState, useRef } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const HomeSectionCarosel = ({data, sectionName}) => {

    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };
    const syncActiveIndex = (e) => { setActiveIndex(e.item); };
    const items = data?.slice(0,40)?.map((item) => (
    <HomeSectionCard product={item}/>
)) || [];

    return (
        <div className='bg-light-gray-100 rounded-lg shadow-sm'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>

                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    responsive={responsive}
                    onSlideChanged={syncActiveIndex}
                />

                {/* Next button */}
                {activeIndex < items.length - 5 && (<Button
                    variant="contained"
                    className="z-50 bg-white"
                    onClick={() => carouselRef.current?.slideNext()}
                    sx={{
                        position: 'absolute',
                        right: 0,
                        top: '8rem',
                        transform: 'translateX(50%) rotate(90deg)',
                        bgcolor: 'white'
                    }}
                >
                    <KeyboardArrowRightIcon
                        sx={{ transform: 'rotate(-90deg)', color: 'black' }}
                    />
                </Button>)}

                {/* Previous button */}

                {activeIndex > 0 && (<Button
                    variant="contained"
                    className="z-50 bg-white"
                    onClick={() => carouselRef.current?.slidePrev()}
                    sx={{
                        position: 'absolute',
                        left: 0,
                        top: '8rem',
                        transform: 'translateX(-50%) rotate(-90deg)',
                        bgcolor: 'white'


                    }}
                >
                    <KeyboardArrowRightIcon
                        sx={{ transform: 'rotate(90deg)', color: 'black' }}
                    />
                </Button>)}

            </div>
        </div>
    )
}

export default HomeSectionCarosel;