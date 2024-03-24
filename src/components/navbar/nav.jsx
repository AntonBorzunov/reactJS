import React from 'react';
import s from './nav.module.css';
import { NavLink, Router } from 'react-router-dom';

const Nav = () => {
    return(
    <nav className={s.nav}>
<div className={s.nav__consol__element} >
<NavLink to='/Profile'>Profile</NavLink>
</div>
<div className={s.nav__consol__element}>
<NavLink to='/Massages'>Massages</NavLink>
</div>
<div className={s.nav__consol__element}>
<NavLink to='/News'>News</NavLink>
</div>
<div className={s.nav__consol__element}>
<NavLink to='/Music'>Music</NavLink>
</div>
<div className={s.nav__consol__element} >
<NavLink to='/Setting'>Setting</NavLink>
    </div>
</nav>
      
    )
}

export default Nav