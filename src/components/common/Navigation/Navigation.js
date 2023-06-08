import React from 'react';
import '../Navigation/Navigation.scss'

const Navigation = () => {

  return (
    <nav>
      <img src='./image/Logo.jpg' alt='Logo' />

      <div>
        <ul className='header__list'>
          <li><i className="fa-solid fa-book"></i></li>
          <li><i className="fa-solid fa-dumbbell"></i></li>
          <li><i className="fa-solid fa-store"></i></li>
          <li><i className="fa-solid fa-newspaper"></i></li>
          <li><i className="fa-solid fa-bars"></i></li>
        </ul>
      </div>

      <div className='header__user'>
        <a href="/">
          <i className="fa-solid fa-user"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;