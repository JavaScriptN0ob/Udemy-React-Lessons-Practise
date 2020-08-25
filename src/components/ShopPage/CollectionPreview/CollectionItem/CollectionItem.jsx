import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import styles from './CollectionItem.module.scss';

import CustomButton from '../../../CustomButton';
import { addItem } from '../../../../redux/cart/action';

const cx = classNames.bind(styles);

function CollectionItem({
  item,
  addItem,
}) {
  const className = cx({
    custom_button: true,
    inverted: true,
  })

  const { name, price, imageUrl } = item;

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
      <CustomButton 
        className={className}
        onClick={() => {addItem(item)}}
      > Add to cart </CustomButton>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem);