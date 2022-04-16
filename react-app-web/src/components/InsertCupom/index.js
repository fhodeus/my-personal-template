import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Wrapper, Description } from './Wrapper';
import Input from '../Input';
import Button from '../Button';
import ContentFlex from '../ContentFlex';

import { AddCupom } from '../../store/cart/actions';

function InsertCupom({ cupom = {}, dispatch }) {
  const [cupomInput, setcupom] = useState(cupom.value);

  useEffect(() => {
    setcupom(cupom.value);
  }, [cupom.value]);

  return (
    <Wrapper>
      <ContentFlex>
        <Input
          value={cupomInput}
          placeholder="Adicionar Cupom"
          onChange={(e) => setcupom(e.target.value)}
        />
        <Button onClick={() => dispatch(AddCupom(cupomInput))}>ADICIONAR</Button>
      </ContentFlex>
      <Description>{cupom.title}</Description>
      <Description>{cupom.descricao}</Description>
    </Wrapper>
  );
}

InsertCupom.propTypes = {
  dispatch: PropTypes.func,
  cupom: PropTypes.object,
};

const mapStateToProps = (state) => ({ cupom: state.cart.cupom });

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InsertCupom);
