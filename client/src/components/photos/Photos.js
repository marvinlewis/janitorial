import React from 'react';
import hero from "../WelcomePage/Hero.jpg";
import item1 from "../WelcomePage/janitorial-item1.jpg";
import item2 from "../WelcomePage/item2.jpg";
import item3 from "../WelcomePage/item3.jpg";
import item4 from "../WelcomePage/item4.jpg";
import item5 from "../WelcomePage/item5.jpg";
import item6 from "../WelcomePage/item6.jpg";
import item7 from "../WelcomePage/item7.jpg";
import item9 from "../WelcomePage/item9.jpg";
import item10 from "../WelcomePage/item10.jpg";

const Photos = () => {
    return (
        <>
        <h2 className='photos-h2'>Photos Of Our Hard Work!</h2>
        <div className='photos-cont'>
            <img src={hero}/>
            <img src={item1}/>
            <img src={item2}/>
            <img src={item3}/>
            <img src={item4}/>
            <img src={item5}/>
            <img src={item6}/>
            <img src={item7}/>
            <img src={item9}/>
            <img src={item10}/>
        </div>
        </>
    )
}
export default Photos;