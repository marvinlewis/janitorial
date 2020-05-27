import React from "react";
import NavBar from "./NavBar";
import TopPage from "./TopPage";
import MidTop from './MidTop';

const WelcomePage = () => {
    return (
        <div>
            <div className="body-cont">
            <MidTop/>
            <TopPage/>
            </div>
        </div>
    )
}
export default WelcomePage;