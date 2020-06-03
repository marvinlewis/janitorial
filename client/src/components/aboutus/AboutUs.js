import React from "react"; 
import item7 from '../WelcomePage/item7.jpg'

const AboutUs = () => {
    return (
        <div className='aboutus-cont'>
            <div className='contact-cont'>
                <h2>Contact</h2>
                    <p>phone: {" "} 
                        <span>800-940-7119 </span>
                    </p>
                <h2 className='location-h2'>Location</h2>
                    <address>
                        <span>1133 E. Fairview blvd. IngleWood Ca, 90302</span>
                    </address>
            </div>
            <div className='owner-cont'>
                <img src={item7} alt='work'/>
                <p>Louis Chase is a Los Angeles born and raised entrepreneur. He and his family have dedicated their lives to establishing and maintaing this company by being a stakehold in the community and associating their work with excellence.</p>
            </div>
        </div>
    )
}

export default AboutUs;