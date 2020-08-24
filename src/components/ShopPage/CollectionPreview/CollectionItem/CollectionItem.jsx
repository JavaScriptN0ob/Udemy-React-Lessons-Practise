import React from 'react';
import classNames from 'classnames/bind'

import styles from './CollectionItem.module.scss';

import CustomButton from '../../../CustomButton'

const cx = classNames.bind(styles);

function CollectionItem({
  id,
  name,
  price,
  imageUrl,
}) {
  const className = cx({
    custom_button: true,
    inverted: true,
  })

  return (
    <div className={styles.collection_item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className={styles.collection_footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>${price}</span>
      </div>
      <CustomButton className={className}> Add to cart </CustomButton>
    </div>
  )
}

export default CollectionItem;