import React from 'react';

import styles from './ShopPage.module.scss';

import ShopData from './Shop.data.js';
import CollectionPreview from './CollectionPreview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: ShopData,
    }
  }

  render() {
    const { collections } = this.state;

    return (
      <div className={styles.shop_page}>
        {collections.map(({
          id,
          ...otherCollectionProps
        }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
        }
      </div>
    )
  }
}

export default ShopPage;