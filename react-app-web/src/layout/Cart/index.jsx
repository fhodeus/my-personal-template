import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Wrapper, CartWrapper, CartHeader, CartBody, CartFooter } from './Wrapper';

import InsertCupom from '../../components/InsertCupom';
import Button from '../../components/Button';

import { collapseCart } from '../../store/cart/actions';
import { openModal } from '../../store/config/actions';

import ProductCart from './components/ProductCart';

const Cart = ({ cart, dispatch }) => (
  <>
    <Wrapper collapsed={cart.collapsed} onClick={() => dispatch(collapseCart())} />

    <CartWrapper collapsed={cart.collapsed}>
      <CartHeader>
        <p>Carrinho</p>
        <button onClick={() => dispatch(collapseCart())} className="close">
          X
        </button>
      </CartHeader>
      <CartBody>
        {cart.products.map((product) => (
          <ProductCart key={product.id} {...{ product }} />
        ))}
      </CartBody>
      <CartFooter>
        {cart.products.length > 0 && (
          <Button onClick={() => dispatch(openModal())} className="checkout">
            COMPRAR
          </Button>
        )}
        <InsertCupom />
      </CartFooter>
    </CartWrapper>
  </>
);

Cart.propTypes = {
  dispatch: PropTypes.func,
  cart: PropTypes.object,
};

const mapStateToProps = (state) => ({ cart: state.cart });

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
