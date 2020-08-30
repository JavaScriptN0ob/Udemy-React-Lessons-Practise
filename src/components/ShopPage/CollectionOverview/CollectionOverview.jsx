import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styles from './CollectionOverview.module.scss';

import CollectionPreview from '../CollectionPreview';
import { selectCollections } from '../../../redux/shop/selector';

function CollectionOverview({ collections }) {
  return (
    <div className={styles.collections_overview}>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
})

export default connect(mapStateToProps)(CollectionOverview);