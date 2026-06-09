import { Avatar, Box, Grid, Rating } from '@mui/material';
import React from 'react';

const ProductReviewCard = () => {
    return (
        <div>

            <Grid container spacing={2} gap={3}>
                <Grid xs={2} sm={1}>
                    <Box>
                        <Avatar
                            className="text-white"
                            sx={{ width: 50, height: 50, bgcolor: "#9155fd" }}>
                            R
                        </Avatar>
                    </Box>
                </Grid>
                <Grid xs={10} sm={9}>
                    <div className="space-y-2">
                        <div>
                            <p className="font-semibold text-lg">Raam</p>
                            <p className="opacity-70">April 5, 2026</p>
                        </div>
                    </div>
                    <Rating value={4.5}  name="half-rating" readOnly precision={0.5}/>
                    <p >Nice product, I really like it. 
                    </p>
                </Grid>
            </Grid> 
        </div>
    );
}

export default ProductReviewCard;
