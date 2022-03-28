import React, {useState} from 'react';
import "../css/Insta.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Img1 from '../assets/gridimg/imga.png'
import Img2 from '../assets/gridimg/imgb.png'
import Img3 from '../assets/gridimg/imgc.png'
import Img4 from '../assets/gridimg/imgd.jpg'
import Img5 from '../assets/gridimg/imge.png'
import Img6 from '../assets/gridimg/imgf.jpg'
import Img7 from '../assets/gridimg/imgg.png'

import Alt1 from '../assets/gridimg/alta.jpg'
import Alt2 from '../assets/gridimg/altb.jpg'
import Alt3 from '../assets/gridimg/altc.jpg'
import Alt4 from '../assets/gridimg/altd.jpg'
import Alt5 from '../assets/gridimg/alte.png'
import Alt6 from '../assets/gridimg/altf.jpg'

import LoremA from '../assets/gridimg/lorem.png'
import LoremB from '../assets/gridimg/lorem2.png'

export default function Insta() {
    const imgs = [Img1, Img2, Img3, Img4, Img5, Img6, Img7]
    const alts = [Alt1, Alt2, Alt3, Alt4, Alt5, Alt6, Alt5] 

    const [swirl, setSwirl] = useState(LoremA);

    return(
        <div id="insta" className="insta-sec">
            <h1 className="insta-title">Grid Page</h1>
            <div className="ipad">
                <div className="in-ipad">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container columns={{ xs: 4, lg: 6}}>
                            {imgs.map((_, index) => (
                            <Grid item xs={2} key={index} className="insta-pics">
                                <img src={imgs[index]} alt="images" width="100%" 
                                
                                    onMouseEnter={(e) => e.currentTarget.src = alts[index]}
                                    onMouseLeave={(e) => e.currentTarget.src = imgs[index]}
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