import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styles from './DirectoryMenu.module.scss';

import MenuItem from '../MenuItem';
import { selectDirectorySections } from '../../../redux/directory/selector';

function Directory({ sections }) {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     sections:[
  //       {
  //         title: 'hats',
  //         imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  //         id: 1,
  //         linkUrl: 'shop/hats',
  //       },
  //       {
  //         title: 'jackets',
  //         imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  //         id: 2,
  //         linkUrl: 'shop/jackets',
  //       },
  //       {
  //         title: 'sneakers',
  //         imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  //         id: 3,
  //         linkUrl: 'shop/sneakers',
  //       },
  //       {
  //         title: 'womens',
  //         imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  //         size: 'large',
  //         id: 4,
  //         linkUrl: 'shop/womens',
  //       },
  //       {
  //         title: 'mens',
  //         imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
  //         size: 'large',
  //         id: 5,
  //         linkUrl: 'shop/mens',
  //       },
  //     ]
  //   }
  // }

  // render() {
    // const { sections } = this.state;

    return (
    <div className={styles.directory_menu}>
      {sections.map(({
          id,
          title,
          imageUrl,
          size,
          linkUrl,
      }) => (
        <MenuItem
          key={id} 
          title={title}
          imageUrl={imageUrl} 
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  )
  // }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory);