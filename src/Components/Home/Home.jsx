import React from "react"
import { FaBeer } from 'react-icons/fa';
import Download from '../../../src/assets/download.jpeg'
import SimpleSlider from "../Shared/Slider/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

    return (
        <div>
            <h3> Lets go for a <FaBeer />? </h3>
           
             <div className="slides">
               <SimpleSlider />
             </div>
        </div>
    )
}


export default Home;