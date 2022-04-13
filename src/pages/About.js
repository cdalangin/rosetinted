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
                    <p className="abt-p">Idealistic posts on social media can set harmful and unrealistic 
                    expectations for the younger generation. Rose-tinted Glasses is a website that will 
                    demonstrate what lies underneath these picture perfect images and remind people that they 
                    are exactly where they need to be.</p>

                    <h3 className="abt-titles">Credits</h3>
                    <div className="all-creds">
                        <a href="https://www.flaticon.com/free-icons/leaf" title="leaf icons" className="creds">Leaf icons created by Good Ware - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/heart" title="heart icons" className="creds">Heart icons created by smalllikeart - Flaticon</a>
                        <a href="https://www.flaticon.com/free-icons/search" title="search icons" className="creds">Search icons created by Taufik - Flaticon</a>
                    </div>

                    <h3 className="abt-titles">References</h3>
                    <div>
                        <p className="abt-p">[1] <a href="https://www.washingtonpost.com/lifestyle/2021/09/17/instagram-teens-parent-advice/" className="creds">Instagram is even worse than we thought for kids. What do we do about it?</a></p>
                        <p className="abt-p">[2] <a href="https://www.gse.harvard.edu/news/uk/17/12/social-media-and-teen-anxiety" className="creds">Social Media and Teen Anxiety</a></p>
                    </div>

                    <h3 className="abt-titles">Technologies used</h3>
                    <div className="all-creds">
                        <a href="https://reactjs.org/" className="creds">React.js</a>
                        <a href="https://www.npmjs.com/package/react-router-dom" className="creds">React Router Dom</a>
                        <a href="https://mui.com/" className="creds">Material UI</a>
                        <a href="https://www.npmjs.com/package/react-anime" className="creds">React Anime</a>
                    </div>
                    
                    <h3 className="abt-titles">Disclaimer</h3>
                    <p className="abt-p">The original posters of the images in the grid do not necessarily 
                        convey the harmful messages mentioned in this presentation. </p>

                    <Link to="/rosetinted" className="back-btn">
                        <img src={Back} alt="back button" className="bb" />
                    </Link>
                </div>
                
            </div>
            <div className="abt abt-foot"></div>
        </div>

    )
}