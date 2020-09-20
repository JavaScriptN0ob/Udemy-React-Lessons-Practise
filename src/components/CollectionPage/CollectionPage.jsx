import React from 'react';
import { connect } from 'react-redux';

import styles from './CollectionPage.module.scss';

import CollectionItem from '../ShopPage/CollectionPreview/CollectionItem';
import { selectCollection } from '../../redux/shop/selector';

function CollectionPage({ collection }) {
  const { title, items } = collection;
  
  return (
    <div className={styles.collection_page}>
      <h2 className={styles.title}>{ title }</h2>
      <div className={styles.items}>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div> 
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage);