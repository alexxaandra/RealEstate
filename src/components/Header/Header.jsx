import React from 'react'; //rfce//"
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi'



function Header() {
  
  function menuClick(){
   const menuList = document.getElementsByClassName("h-menu")[0];
   if (menuList.classList.contains("menu-off")){
    menuList.classList.remove("menu-off");
   }
   else{
    menuList.classList.add("menu-off");
  }
 }
  
  
  return (
    <div>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src="./logo.png" alt="logo" width={100}/>
          <div className="menu-off flexCenter h-menu" >
            <a href="#resident">Residencies</a>
            <a href="#value">Our Value</a>
            <a href="#contact">Contact Us</a>
            <a href="#start">Get Started</a>
            <button className='button'>
            <a href="#">Contact</a>
            </button>

          </div>
          <div className="menu-icon " onClick={menuClick}>
          <BiMenuAltRight size={30}/>
        </div>
        </div> 
        
      </section>
    </div>
  );
}

export default Header;
