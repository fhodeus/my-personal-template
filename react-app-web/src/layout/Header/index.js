import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { Wrapper, HeaderItem } from './Wrapper';
import { collapseCart } from '../../store/cart/actions';
import { changeLocale } from '../../store/config/actions';

import cart from '../../assets/cart.svg';
import brasil from '../../assets/brazil_flag.svg';
import usa from '../../assets/usa_flag.svg';

function Header({ dispatch, locale }) {
  return (
    <Wrapper>
      <HeaderItem onClick={() => dispatch(changeLocale())}>
        {(locale == `BR` && <img width="50px" height="35px" src={brasil} alt="cart" />) || (
          <img width="50px" height="35px" src={usa} alt="cart" />
        )}
      </HeaderItem>
      <HeaderItem onClick={() => dispatch(collapseCart())}>
        <img width="40px" src={cart} alt="cart" />
      </HeaderItem>
    </Wrapper>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = (state) => ({ locale: state.config.locale });

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
