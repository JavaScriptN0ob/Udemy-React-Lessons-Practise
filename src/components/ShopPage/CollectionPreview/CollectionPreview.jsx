import React from 'react';

import styles from './CollectionPreview.module.scss';

import CollectionItem from './CollectionItem';

function CollectionPreview({
  title,
  items,
}) {
  return (
    <div className={styles.collection_preview}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
      <div className={styles.preview}>
        
        {/* these method of array below is a bad example, 
        as the array goes larger, the performance will be very bad. */}

        {items
          .filter((item, index) => index < 4)
          .map(({
            id,
            ...otherItemProps
          }) => (
            <CollectionItem 
              key={id} 
              {...otherItemProps}
            />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview;