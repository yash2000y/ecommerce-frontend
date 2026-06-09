import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const Footer = () => {
    return (


        <footer className="bg-black text-white">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div className="text-center">
                        <h2 className="mb-6 text-xl font-semibold text-heading uppercase ">Company</h2>
                        <ul className="text-body font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Blog</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Jobs</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Press</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Partners</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h2 className="mb-6 text-xl font-semibold text-heading uppercase">Solutions</h2>
                        <ul className="text-body font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Marketing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Analytics</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Commerce</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Insights</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h2 className="mb-6 text-xl font-semibold text-heading uppercase">Documentation</h2>
                        <ul className="text-body font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Guides</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">API Status</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h2 className ="mb-6 text-xl font-semibold text-heading uppercase">Legal</h2>
                        <ul className="text-body font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Claim</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Terms & Conditions</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6 bg-neutral-secondary-soft flex justify-center items-center">

                    <span className="text-sm text-body text-center">
                        © 2023
                        <a href="https://flowbite.com/" className="hover:underline">
                            Flowbite™
                        </a>.
                        All Rights Reserved.

                        <br />
                        Made with love by me

                        <br />
                        Icons made by Freepik from www.flaticon.com
                    </span>

                </div>
            </div>
            
        </footer>
        

    );
};

export default Footer;


// import { Button } from "@mui/material"
// import { Typography } from '@mui/material';
// import React from 'react';
// import { Grid } from "@mui/material";
// const Footer = () => {
//     return (
//         <div>
//             <Grid className='bg-black text-white text-center mt-10'
//                 container
//                 sx=
//                 {{
//                     bgcolor: 'black',
//                     color: 'white',
//                     py: 3
//                 }}>
//                 <Grid item xs={12} sm={6} md={3}>
//                     <Typography className='pb-5' variant='h6'>Company</Typography>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >About</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Blog</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Press</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Jobs</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Partners</Button> </div>
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={3}>
//                     <Typography className='pb-5' variant='h6'>Company</Typography>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >About</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Blog</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Press</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Jobs</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Partners</Button> </div>
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={3}> <Typography className='pb-5' variant='h6'>Company</Typography>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >About</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Blog</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Press</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Jobs</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Partners</Button> </div>
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={3}> <Typography className='pb-5' variant='h6'>Company</Typography>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >About</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Blog</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Press</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Jobs</Button> </div>
//                     <div> <Button className='pb-5' variant='h6' gutterBottom >Partners</Button> </div>
//                 </Grid> </Grid> </div>
//                 );} 
// export default Footer;
