import React, {useState} from 'react';
import "../css/Insta.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ImgA from '../assets/gridimg/imga.png'
import ImgB from '../assets/gridimg/imgb.png'
import ImgC from '../assets/gridimg/imgc.png'
import ImgD from '../assets/gridimg/imgd.png'
import ImgE from '../assets/gridimg/imge.png'
import ImgF from '../assets/gridimg/imgf.jpg'

import LoremA from '../assets/gridimg/lorem.png'
import LoremB from '../assets/gridimg/lorem2.png'

export default function Insta() {
    const imgs = [ImgA, ImgB, ImgC, ImgD, ImgE, ImgF] //imgs[index]

    const [swirl, setSwirl] = useState(LoremA);

    // referral from dr pagan to get a consultation for a mass in her palate
    return(
        <div id="insta" className="insta-sec">
            <h1 className="insta-title">Grid Page</h1>
            <div className="ipad">
                <div className="in-ipad">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{xs:1}} columns={{ xs: 4, lg: 6}}>
                            {imgs.map((_, index) => (
                            <Grid item xs={2} key={index} className="insta-pics">
                                <img src={LoremA} alt="images" height="200px" 
                                
                                onMouseEnter={(e) => e.currentTarget.src = {LoremB}}
                                onMouseLeave={(e) => e.currentTarget.src = {LoremA}}
                                />
                            </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    )
}