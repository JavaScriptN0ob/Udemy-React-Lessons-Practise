import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu_item.module.scss';

const cx = classNames.bind(styles);

function MenuItem({
  title,
  imageUrl,
  size,
}) {
  return (
    <div 
      className={cx({
        menu_item: true,
        large: size === 'large',
      })}
    >
      <div 
        className={styles.background_image}
        style={{
        backgroundImage: `url(${imageUrl})`,
      }} 
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem;