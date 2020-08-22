import React from 'react';

import styles from './CollectionItem.module.scss';

function CollectionItem({
  id,
  name,
  price,
  imageUrl,
}) {
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
    </div>
  )
}

export default CollectionItem;