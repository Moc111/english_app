import React from 'react';
import '../Navigation/Navigation.scss'

const Navigation = () => {
  return (
    <nav>
        <div>
            <img className='header__logo' src='' alt='logo'/>
        </div>

        <div>
          <ul className='header__list'>
             <li><i class="fa-solid fa-user"></i></li>
             <li><i class="fa-solid fa-dumbbell"></i></li>
             <li><i class="fa-solid fa-book"></i></li>
          </ul>
        </div>

        <div className='header__user'>
            <i>User</i>
        </div>
        
    </nav>
  );
};

export default Navigation;