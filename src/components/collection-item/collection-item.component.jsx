import React from 'react';
import { connect } from 'react-redux'
import { AddItem } from '../../redux/cart/cart.action'
import CustomButton from '../custom-button/custom-button.component'

import './collection-item.styles.scss';


const CollectionItem = ({ item, AddItem }) => {

  const { name, price, imageUrl } = item

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={()=> AddItem(item)}>ADD TO CART</CustomButton>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  AddItem: item => dispatch(AddItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);
