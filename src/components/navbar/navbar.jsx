import React, { useState } from 'react';

import styles from './navbar.module.css'
import { FcAdvertising, FcNeutralDecision, FcMenu } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <a>FLEX</a>
      </div>

      <ul className={styles.navbar_menu}> 
        <li><a>사건사고</a></li>
        <li><a>자유게시판</a></li>
        <li><a>문의게시판</a></li>
      </ul>

      <ul className={styles.navbar_icons}>
        <li><i><FcAdvertising/></i></li>
        <li><i><FcNeutralDecision/></i></li>
      </ul>

      <a href="#" className={styles.navbar_toggleBtn}>
        <i onClick={()=>{setToggle(true);}}><FcMenu/></i>    
      </a>
    </nav>
  )
}

export default Navbar
