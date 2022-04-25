import React from 'react';
import '../css/Graphics.css'
import Anime from 'react-anime';

import Exactly from "../assets/graphics/exactly.png"
import Body from "../assets/graphics/body.png"
import Face from "../assets/graphics/face.png"
import Accomp from "../assets/graphics/accomp.png"
import Relation from "../assets/graphics/relation.png"
import Proud from "../assets/graphics/proud.png"
import NeedToBe from "../assets/graphics/needtobe.png"

export default function Graphics() {

    return(
        <div id="graphics">
            <p className="graphic-text">don't let posts on instagram make you feel inferior</p>
            <div className="middle-grp">
                <img src={Body} alt="your body" className="middle-graphics l hvr-hang"/>
                <img src={Face} alt="your face" className="middle-graphics r hvr-hang"/>
                <img src={Accomp} alt="your accomplishments" className="middle-graphics l hvr-hang"/>
                <img src={Relation} alt="your relationships" className="middle-graphics r hvr-hang"/>
            </div>
            <img src={Proud} alt="are all things to celebrate and be proud of" className="grp1 hvr-hang"/>
            <div className="final-graphic">
                <img src={NeedToBe} alt="you're exactly where you need to be" className="grp2 hvr-hang"/>
            </div>
            
        </div>

    )
}