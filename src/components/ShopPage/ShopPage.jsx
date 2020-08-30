import React from 'react';
import { Route } from 'react-router-dom';

import styles from './ShopPage.module.scss';

import CollectionOverview from './CollectionOverview';
import CollectionPage from '../CollectionPage';

function ShopPage({ match }) {
  return (
    <div className={styles.shop_page}>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}



export default ShopPage;