import React, {useState, useContext} from 'react';
import {StateContext} from "../pages/MainPage"
import "../css/Insta.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// import Img1 from '../assets/gridimg/imga.png'
// import Img2 from '../assets/gridimg/imgb.png'
// import Img3 from '../assets/gridimg/imgc.png'
// import Img4 from '../assets/gridimg/imgd.png'
// import Img5 from '../assets/gridimg/imge.png'
// import Img6 from '../assets/gridimg/imgf.jpg'
// import Img7 from '../assets/gridimg/imgg.png'

// import Alt1 from '../assets/gridimg/alta.jpg'
// import Alt2 from '../assets/gridimg/altb.jpg'
// import Alt3 from '../assets/gridimg/altc.jpg'
// import Alt4 from '../assets/gridimg/altd.jpg'
// import Alt5 from '../assets/gridimg/alte.png'
// import Alt6 from '../assets/gridimg/altf.jpg'

import IpadButton from "../assets/ipadbutton.png"
import LoremA from '../assets/gridimg/lorem.png'
import LoremB from '../assets/gridimg/lorem2.png'

export default function Insta() {
    // const imgs = [Img1, Img2, Img3, Img4, Img5, Img6, Img7] //imgs[index]
    // const alts = [Alt1, Alt2, Alt3, Alt4, Alt5, Alt6, Alt5] 
    const startImgs = [
        {
            name: "Name",
            // asset: Img1,
            style: {
                opacity: "1", 
                // backgroundImage: `url(${Img2})`,
            },
            "quote": "Bla bla bla"
        },
        {
            name: "Name",
            // asset: Img2,
            style: {
                opacity: "1", 
                // backgroundImage: `url(${Img2})`,
            },
            "quote": "Bla bla bla"
        },
        {
            name: "Name",
            // asset: Img3,
            style: {
                "opacity": "1", 
                // backgroundImage: `url(${Img3})`,
            },
            "quote": "Bla bla bla"
        },
        {
            "name": "Name",
            // "asset": Img4,
            "style": {
                "opacity": "1", 
                // backgroundImage: `url(${Img4})`,
            },
            "quote": "Bla bla bla"
        },
        {
            "name": "Name",
            // "asset": Img5,
            "style": {
                "opacity": "1", 
                // backgroundImage: `url(${Img5})`,
            },
            "quote": "Bla bla bla"
        },
        {
            "name": "Name",
            // "asset": Img6,
            "style": {
                "opacity": "1", 
                // backgroundImage: `url(${Img6})`,
            },
            "quote": "Bla bla bla"
        },
        {
            "name": "Name",
            // "asset": Img7,
            "style": {
                "opacity": "1", 
                // backgroundImage: `url(${Img7})`,
                // transition: "0.5s",
            },
            "quote": "Bla bla bla"
        },
        {
            "name": "Name",
            // "asset": Img7,
            "style": {
                "opacity": "1", 
                // backgroundImage: `url(${Img7})`,
                // transition: "0.5s",
            },
            "quote": "Bla bla bla"
        },
        {
            "name": "Name",
            // "asset": Img7,
            "style": {
                "opacity": "1", 
                // backgroundImage: `url(${Img7})`,
                // transition: "0.5s",
            },
            "quote": "Bla bla bla"
        },
        {
            "name": "Name",
            // "asset": Img7,
            "style": {
                "opacity": "1", 
                // backgroundImage: `url(${Img7})`,
                // transition: "0.5s",
            },
            "quote": "Bla bla bla"
        },
        {
            "name": "Name",
            // "asset": Img7,
            "style": {
                "opacity": "1", 
                // backgroundImage: `url(${Img7})`,
                // transition: "0.5s",
            },
            "quote": "Bla bla bla"

        },
        {
            "name": "Name",
            // "asset": Img7,
            "style": {
                "opacity": "1", 
                // backgroundImage: `url(${Img7})`,
                // transition: "0.5s",
            },
            "quote": "Bla bla bla"
        },
    ]

    const quotes = ["Herrow", "Herrow", "Herrow", "Herrow", "Herrow", "Herrow", "Herrow", "Herrow", "Herrow", "Herrow", "Herrow", "Herrow"]
    
    const [items, setItems] = useState(startImgs)
    const [isOn, setIsOn] = useState(false);

    const handleClick = (i) => {
        const currItem = {...items[i]["style"]}
        
        if (currItem["opacity"] == "0") {
            currItem["opacity"] = "1"
        } else {
            currItem["opacity"] = "0"
        }
        items[i]["style"] = currItem

        const newItems = [...items]
        setItems(newItems)
    }

    const onIpad = () => {
        setIsOn(!isOn);
        console.log("Click!!")
    }

    return(
        <div id="insta" className="insta-sec">
            {/* <h1 className="insta-title">Grid Page</h1> */}
            <div className="ipad">
                <div className="in-ipad">
                    <Box sx={{ flexGrow: 1 }} className="ipad-box">
                        <Grid container columns={{ xs: 4, lg: 6}} className="quote-grid">
                            {quotes.map((_, index) => (
                            <Grid item xs={2} key={index} className="ipad-quote">
                                <p className="quote-text">
                                    {quotes[index]}
                                </p>
                                
                            </Grid>
                            ))}
                        </Grid>

                        <Grid container columns={{ xs: 4, lg: 6}}>
                            {items.map((_, index) => (
                            <Grid item xs={2} key={index} >
                                <div className={"ipad-imgs insta" + index}
                                style={items[index].style} 
                                onClick={() => {handleClick(index)}} ></div>
                            </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>

                <div className={isOn ? "off-ipad" : null}></div>

                <div className="" onClick={() => {onIpad()}}>
                    <img src={IpadButton} alt="ipad button" className="ipad-button"/>
                </div>
            </div>
        </div>
    )
}