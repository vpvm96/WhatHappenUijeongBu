import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contents}>
        <h4 className={styles.title}>
          여기에 뭘 넣지?
        </h4>
      </div>
    </footer>
  )
}

export default Footer
