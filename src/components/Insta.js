import React, {useState, useContext} from 'react';
import {StateContext} from "../pages/MainPage"
import "../css/Insta.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Push from "../assets/push.png"
import IpadButton from "../assets/ipadbutton.png"
import LoremA from '../assets/gridimg/lorem.png'
import LoremB from '../assets/gridimg/lorem2.png'

// ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹

export default function Insta() {
    const startImgs = [
        {
            name: "Bella",
            style: {
                opacity: "1", 
            },
            "quote": "Bla bla bla",
            "bad": false
        },
        {
            name: "Luxury Bags",
            style: {
                opacity: "1", 
            },
            "quote": "“If I could have this product that’s associated with all of this success, then I’m going to be able to join this world.”³",
            "bad": true
        },
        {
            name: "Crochet",
            style: {
                "opacity": "1", 
            },
            "quote": "Bla bla bla",
            "bad": false
        },
        {
            "name": "Couple",
            "style": {
                "opacity": "1", 
            },
            "quote": "Bla bla bla",
            "bad": true
        },
        {
            "name": "Flowers",
            "style": {
                "opacity": "1", 
            },
            "quote": "Bla bla bla",
            "bad": false
        },
        {
            "name": "Kylie",
            "style": {
                "opacity": "1", 
            },
            "quote": "“People have always wanted to present the best version of themselves to others. It’s just that on social media people often present a very enhanced, unrealistic version of their appearance.”",
            "bad": true
        },
        {
            "name": "Engagement",
            "style": {
                "opacity": "1", 
            },
            "quote": "Bla bla bla",
            "bad": false
        },
        {
            "name": "X Age",
            "style": {
                "opacity": "1", 
            },
            "quote": "Bla bla bla",
            "bad": false
        },
        {
            "name": "Bikini",
            "style": {
                "opacity": "1", 
            },
            "quote": "Instagram makes body image issues worse for 1 in 3 teen girls¹",
            "bad": true
        },
        {
            "name": "Vacay",
            "style": {
                "opacity": "1", 
            },
            "quote": "Bla bla bla",
            "bad": false
        },
        {
            "name": "Graduate",
            "style": {
                "opacity": "1", 
            },
            "quote": "Bla bla bla",
            "bad": false

        },
        {
            "name": "Guy",
            "style": {
                "opacity": "1", 
            },
            "quote": "14% of boys report that Instagram made them feel worse about themselves¹",
            "bad": true
        },
    ]
    
    const [items, setItems] = useState(startImgs)
    const [isOn, setIsOn] = useState(false);
    const [hasCta, setHasCta] = useState(true)
    let ipadClicks = 0;

    const handleClick = (i) => {
        if (items[i].bad === true) {
            const currItem = {...items[i]["style"]}
        
            if (currItem["opacity"] === "0") {
                currItem["opacity"] = "1"
            } else {
                currItem["opacity"] = "0"
            }
            items[i]["style"] = currItem

            const newItems = [...items]
            setItems(newItems)
        }
        
    }

    const onIpad = () => {
        setIsOn(!isOn);
        

        if (ipadClicks === 0) {
            ipadClicks += 1;
            setHasCta(false)
        }
        // setHasCta(false)

    }

    return(
        <div id="insta" className="insta-sec">
            {/* <h1 className="insta-title">Grid Page</h1> */}
            <div className="ipad">
                <div className="in-ipad">
                    {/* <div className="insta-header"></div> */}
                    <Box sx={{ flexGrow: 1 }} className="ipad-box">
                        <Grid container columns={{ xs: 4, lg: 6}} className="quote-grid">
                            {items.map((_, index) => (
                            <Grid item xs={2} key={index} className="ipad-quote">
                                <p className="quote-text">
                                    {items[index].quote}
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

                <div className={isOn ? null : "off-ipad"}></div>
                <img src={Push} alt="cta" className={hasCta ? "ipad-cta cta1" : "ipad-cta cta2"}/>

                <div className="" onClick={() => {onIpad()}}>
                    <img src={IpadButton} alt="ipad button" className="ipad-button"/>
                </div>
            </div>
        </div>
    )
}