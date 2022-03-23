import React from 'react';
import "../css/Insta.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ImgA from '../assets/gridimg/imga.png'
import ImgB from '../assets/gridimg/imgb.png'
import ImgC from '../assets/gridimg/imgc.png'
import ImgD from '../assets/gridimg/imgd.png'
import ImgE from '../assets/gridimg/imge.png'
import ImgF from '../assets/gridimg/imgf.jpg'

import Lorem from '../assets/gridimg/lorem.png'

export default function Insta() {

    const imgs = [ImgA, ImgB, ImgC, ImgD, ImgE, ImgF] //imgs[index]

    return(
        <div id="insta" className="insta-sec">
            <h1>Grid Page</h1>
            <div className="ipad">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12}}>
                    {imgs.map((_, index) => (
                    <Grid item xs={2} key={index}>
                        <img src={Lorem} alt="images" height="100px"/>
                    </Grid>
                    ))}
                </Grid>
            </Box>
            </div>
        </div>
    )
}