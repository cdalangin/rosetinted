import React from 'react';
import "../css/About.css"
import Back from "../assets/buttons/goback.png"
import {Link} from "react-router-dom";

export default function Settings() {

    return(
        <div className="about-page">
            <div className="abt abt-head"></div>
            <div className="abt abt-base">
                <div className="abt-text">
                    <h3 className="abt-titles">About Rose-Tinted Glasses</h3>
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

                    <h3 className="abt-titles">Disclaimer:</h3>
                    <p>The original posters of the images in the grid do not necessarily 
                        convey the harmful messages mentioned in this presentation. </p>

                    <h3 className="abt-titles">Credits</h3>
                    <div className="all-creds">
                        <a href="https://www.flaticon.com/free-icons/leaf" title="leaf icons" className="creds">Leaf icons created by Good Ware - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/heart" title="heart icons" className="creds">Heart icons created by smalllikeart - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Taufik - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/speech-bubble" title="speech bubble icons">Speech bubble icons created by Alfredo Hernandez - Flaticon</a>
                    </div>

                    <h3 className="abt-titles">References</h3>
                    <div>
                        <p>[1] <a href="https://www.washingtonpost.com/lifestyle/2021/09/17/instagram-teens-parent-advice/">Instagram is even worse than we thought for kids. What do we do about it?</a></p>
                        <p>[2] <a href="https://www.gse.harvard.edu/news/uk/17/12/social-media-and-teen-anxiety">Social Media and Teen Anxiety</a></p>
                    </div>

                    <Link to="/rosetinted" className="back-btn">
                        <img src={Back} alt="back button" className="bb" />
                    </Link>
                </div>
                
            </div>
            <div className="abt abt-foot"></div>
        </div>

    )
}