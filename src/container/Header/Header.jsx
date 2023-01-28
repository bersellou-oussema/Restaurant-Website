import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavor"/>
      <h1 className='app__header-h1'>The key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>The food at a fine dining establishment as our restaurant will be of the highest quality, made with luxurious ingredients, and served in unique and beautiful presentations. The quality of the dishware and cutlery is also higher, and often the décor and even the architecture of the restaurant building is notable.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img"/>

    </div>
  </div>
);

export default Header;
