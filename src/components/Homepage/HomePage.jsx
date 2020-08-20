import React from 'react';
import Directory from './directory_menu';

import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.homepage}>
      <Directory />
    </div>
  )
}

export default HomePage;