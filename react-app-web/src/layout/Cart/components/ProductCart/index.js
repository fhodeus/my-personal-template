import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Wrapper, ProductImage, ProductInfo, ProductInfoBlock, ProductAction } from './Wrapper';

import { removeToCart } from '../../../../store/cart/actions';
import FormatCurrency from '../../../../components/FormatCurrency';

function ProductCart({ product, dispatch }) {
  return (
    <Wrapper>
      <ProductImage src={product.image_url} />
      <ProductInfoBlock>
        <ProductInfo>{product.name}</ProductInfo>
        <ProductInfo>
          <FormatCurrency value={product.valor} />
        </ProductInfo>
        <ProductInfo min>swatch : {product.swatchId}</ProductInfo>
      </ProductInfoBlock>
      <ProductAction onClick={() => dispatch(removeToCart(product.id))}>X</ProductAction>
    </Wrapper>
  );
}

ProductCart.propTypes = {
  product: PropTypes.object,
  dispatch: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ProductCart);
