import React from 'react'
import style from "./navbar.module.css"
import {  NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <NavLink to={"/"} >Home</NavLink>
      <NavLink to={"/add"} >Add product</NavLink>
    </div>
  );
}

export default Navbar