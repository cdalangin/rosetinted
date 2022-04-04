import React, {useState, useContext} from 'react';
import {StateContext} from "../pages/MainPage"
import "../css/Insta.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Img1 from '../assets/gridimg/imga.png'
import Img2 from '../assets/gridimg/imgb.png'
import Img3 from '../assets/gridimg/imgc.png'
import Img4 from '../assets/gridimg/imgd.png'
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
    const imgs = [Img1, Img2, Img3, Img4, Img5, Img6, Img7] //imgs[index]

    const startImgs = [
        {
            name: "Name",
            asset: Img1,
            style: {
                opacity: "1", 
                // backgroundImage: `url(${Img2})`,
            }
        },
        {
            name: "Name",
            asset: Img2,
            style: {
                opacity: "1", 
                // backgroundImage: `url(${Img2})`,
            }
        },
        {
            name: "Name",
            asset: Img3,
            style: {
                "opacity": "1", 
                // backgroundImage: `url(${Img3})`,
            }
        },
        {
            "name": "Name",
            "asset": Img4,
            "style": {
                "opacity": "1", 
                // backgroundImage: `url(${Img4})`,
            }
        },
        {
            "name": "Name",
            "asset": Img5,
            "style": {
                "opacity": "1", 
                // backgroundImage: `url(${Img5})`,
            }
        },
        {
            "name": "Name",
            "asset": Img6,
            "style": {
                "opacity": "1", 
                // backgroundImage: `url(${Img6})`,
            }
        },
        {
            "name": "Name",
            "asset": Img7,
            "style": {
                "opacity": "1", 
                // backgroundImage: `url(${Img7})`,
                // transition: "0.5s",
            }
        },
    ]
    const alts = [Alt1, Alt2, Alt3, Alt4, Alt5, Alt6, Alt5] 
    const [items, setItems] = useState(startImgs)
    const [swirl, setSwirl] = useState(LoremA);

    const handleClick = (i) => {
        console.log("OLD", items[i])
        const currItem = {...items[i]["style"]}
        
        if (currItem["opacity"] == "0") {
            currItem["opacity"] = "1"
        } else {
            currItem["opacity"] = "0"
        }
        
        const newItems = [...items, items[i]["style"] = currItem]
        setItems(newItems)
        console.log(items[i])
    }

    return(
        <div id="insta" className="insta-sec">
            <h1 className="insta-title">Grid Page</h1>
            <div className="ipad">
                <div className="in-ipad">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container columns={{ xs: 4, lg: 6}}>
                            {items.map((_, index) => (
                            <Grid item xs={2} key={index} className="insta-pics">
                                <div className="testInsta"
                                style={items[index].style} 
                                onClick={() => {handleClick(index)}}
                                onMouseEnter={() => (console.log("curr", items[index].style))}
                                >
                                    
                                    
                                {/* <img src={LoremA} alt="images" width="100%" 
                                    
                                    onMouseEnter={(e) => e.currentTarget.src = alts[index]}
                                    onMouseLeave={(e) => e.currentTarget.src = LoremA}
                                /> */}
                                </div>

                                {/* <div width="100%" height="100%" className={"testInsta" + index}></div> */}
                            </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    )
}