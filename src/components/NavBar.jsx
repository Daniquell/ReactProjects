import React,{useContext} from "react";
import { Link } from 'react-router-dom';
import AuthContext from '../context'


const NavBar=() => {
  
  const {setIsAuth}=useContext(AuthContext);
  const logout=()=>{
    localStorage.clear();
    setIsAuth(false)

    
  }
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
        <a onClick={()=>setIsAuth(false)} class="waves-effect waves-light btn"><i class="material-icons left">airplanemode_active</i>button</a>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;