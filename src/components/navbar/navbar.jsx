import React, { useState } from 'react';

import styles from './navbar.module.css'
import { FcAdvertising, FcNeutralDecision, FcMenu } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { memo } from 'react';

const Navbar = memo(({ username, onLogout, onAllSns, onMySns }) => {
  // const [toggle, setToggle] = useState(false)

   // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  const onClickHandler = () => {
    window.location.reload();
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <a><Link to="/#">WHU</Link></a>
      </div>

      <ul className={styles.navbar_menu}> 
        <li onClick={onClickHandler}><Link to='/'>소셜 네트워크 서비스</Link></li>
        <li><Link to="/issue">사건사고</Link></li>
        <li><Link to="/free">자유게시판</Link></li>
        <li><Link to="/question">문의게시판</Link></li>
      </ul>

      <ul className={styles.navbar_icons}>
        <li className={styles.logout} onClick={onLogout}>로그아웃</li>
        <li><i><FcAdvertising/></i></li>
        <li><i><FcNeutralDecision/></i></li>
      </ul>
{/* 
      <a href="#" className={styles.navbar_toggleBtn}>
        <i onClick={()=>{setToggle(true);}}><FcMenu/></i>    
      </a> */}
    </nav>
  )
});

export default Navbar
