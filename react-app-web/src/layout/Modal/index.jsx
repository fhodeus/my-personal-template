import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import FormatCurrency from '../../components/FormatCurrency';
import InputModal from '../../components/InputModal';
import InsertCupom from '../../components/InsertCupom';

import { Wrapper, ModalWrapper, ModalHeader, ModalBody, ModalFooter } from './Wrapper';

import { openModal } from '../../store/config/actions';

export const Modal = ({ cart, modal, dispatch }) => {
  const [total, setTotal] = useState(0);

  const amountProducts = () =>
    setTotal(
      cart.products.reduce(function (a, b) {
        return a + b[`valor`];
      }, 0),
    );

  useEffect(() => {
    amountProducts();
  }, [cart]);

  return (
    <>
      <Wrapper collapsed={modal} onClick={() => dispatch(openModal(false))} />

      <ModalWrapper collapsed={modal}>
        <ModalHeader>
          <p>Checkout</p>
          <button onClick={() => dispatch(openModal(false))} className="close">
            X
          </button>
        </ModalHeader>
        <ModalBody>
          <InputModal type="text" label="Nome" width="50%" />
          <InputModal type="text" label="Sobrenome" width="50%" />
          <InputModal type="text" label="CEP" width="50%" />
          <InputModal type="text" label="Cidade" width="50%" />
          <InputModal type="text" label="Rua" width="100%" />
          <InputModal type="text" label="Bairro" width="100%" />
          <InputModal type="text" label="Nome (Como escrito no cartao)" width="100%" />
          <InputModal type="text" label="Numero no Cartao" width="100%" />
          <InputModal type="text" label="Data de vencimento" width="50%" />
          <InputModal type="text" label="CVV" width="50%" />
          <div style={{ 'margin-left': 'auto' }}>
            Total = <FormatCurrency value={total} />
          </div>
        </ModalBody>
        <ModalFooter>
          <InsertCupom fontSize="min" />
          <Button onClick={() => dispatch(openModal(false))} className="checkout">
            FINALIZAR
          </Button>
        </ModalFooter>
      </ModalWrapper>
    </>
  );
};

Modal.propTypes = {
  dispatch: PropTypes.func,
  cart: PropTypes.object,
  modal: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  modal: state.config.modal,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
