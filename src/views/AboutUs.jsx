import React from 'react';
import './AboutUs.css';
import Boltu2 from '../cats/Boltu2.jpg';

const AboutUs = () => {
  return (
    <section className="about-us-container">
      
      <div className="contentAboutUs">
        <h2 className='contentTop'>Welcome to Purrfect Adoption!</h2>
        <p>
          Purrfect Adoption is dedicated to creating a world where every pet finds a loving home and every family discovers the joy of companionship. Our mission goes beyond just rehoming; we strive
          to educate communities about responsible pet ownership, the importance of adoption, and the value of treating animals with kindness and care. Whether you’re looking to adopt, foster, or
          support through donations, Purrfect Adoption is here to guide you every step of the way. Together, we can make a difference, one paw at a time!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
