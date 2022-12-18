import React from 'react'
import styles from "./Footer.module.scss"

const date = new Date;
const Year = date.getFullYear();
const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        &copy; {Year} All Right Reserved.
      </div>
    </footer>
  )
}

export default Footer