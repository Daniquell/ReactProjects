import React from "react";
import { Link } from 'react-router-dom';


const NavBar=() => {
  return (
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right">
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/devices'>Devices</Link></li>
        <li><a href="#">Components</a></li>
        <li><a href="#">JavaScript</a></li>
        <li><Link to="/posts">Posts</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;