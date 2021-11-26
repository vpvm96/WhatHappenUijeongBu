import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerRow}>
        <div className={styles.footerCol}>
          <h5>We deal with cases in Uijeongbu.</h5>
          <p className={styles.content}></p>
          <p className={styles.content}>Company : Gyeonggi-do Uijeongbu</p>
          <p className={styles.content}>Tel : ooo-ooo-ooo</p>
        </div>
        <div className={styles.footerCol}>
          <h5>WHU</h5>
          <p className={styles.content}>Social Network Service</p>
          <p className={styles.content}>Since : 2021.11</p>
        </div>
        <div className={styles.footerCol}>
          <h5>CopyRight</h5>
          <div className={styles.content}>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;