import React from 'react';
import { connect } from 'react-redux';

import styles from './CollectionPage.module.scss';

import CollectionItem from '../ShopPage/CollectionPreview/CollectionItem';
import { selectCollection } from '../../redux/shop/selector';

function CollectionPage({ collection }) {
  console.log(collection);
  return (
    <div className={styles.collection_page}>
      <h2>COLLECTION PAGE</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage);