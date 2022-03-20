import React from 'react';
import "../css/About.css"
import Back from "../assets/goback.png"
import {Link} from "react-router-dom";

export default function Settings() {

    return(
        <div className="about-page">
            <div className="abt abt-head"></div>
            <div className="abt abt-base">
                <div className="abt-text">
                    <h3>About Rose-Tinted Glasses</h3>
                    <p className="elevator">Social media is such a powerful tool for 
                    people to connect and share their lives with the world. People can 
                    share a stylish photo, a new achievement, or even just what they’re 
                    doing at the moment. However, it comes to a point where people will 
                    exaggerate or alter their posts to appear to live a more successful 
                    or desirable life than they really are. This creates harmful and 
                    unrealistic expectations, especially for the younger generation, 
                    since they will compare their own lives to these posts and feel 
                    inadequate. Rose-tinted Glasses is a website that will demonstrate 
                    what possibly lies underneath these picture perfect images and remind 
                    people that they are exactly where they need to be.</p>

                    <h3>Disclaimer:</h3>
                    <p>The original posters of the images in the grid do not necessarily 
                        convey the harmful messages mentioned in this __. </p>

                    <h3>Credits</h3>

                    <Link to="/" className="back-btn">
                        <img src={Back} alt="back button" className="bb" />
                    </Link>
                </div>
                
            </div>
            <div className="abt abt-foot"></div>
        </div>

    )
}