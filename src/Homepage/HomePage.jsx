import React from 'react';

import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.directory_menu}>
        <div className={styles.menu_item}>
          <div className={styles.content}>
            <h1 className={styles.title}>HATS</h1>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={styles.menu_item}>
          <div className={styles.content}>
            <h1 className={styles.title}>JACKETS</h1>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={styles.menu_item}>
          <div className={styles.content}>
            <h1 className={styles.title}>SNEAKERS</h1>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={styles.menu_item}>
          <div className={styles.content}>
            <h1 className={styles.title}>WOMENS</h1>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={styles.menu_item}>
          <div className={styles.content}>
            <h1 className={styles.title}>MENS</h1>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;