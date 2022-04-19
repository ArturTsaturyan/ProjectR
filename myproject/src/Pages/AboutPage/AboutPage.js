import React from 'react';
import Likes from '../../Components/Likes/Likes';
import './AboutPage.css'
import galactic from './galactic.jpeg'

const About = () => {
    return (
         <div className="about">
        <div className="wrap">
          <div className="card">
            <div className="card-image">
              <img src={galactic} alt="galactic"/>
              <Likes/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;
