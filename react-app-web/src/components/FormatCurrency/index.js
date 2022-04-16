import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;

  .usd {
    color: inherit;
    font-size: 1rem;
    display: inline-block;
  }

  .referenceName {
    display: inline;
    text-decoration: line-through;
    font-size: 1rem;
    color: #3339;
    margin-left: 10px;
  }
`;

const FormatCurrency = ({ value, cupom, locale, sufix = true }) => {
  const formatCurrency = new Intl.NumberFormat(locale === 'BR' ? 'pt-BR' : 'en-US', {
    style: 'currency',
    currency: locale === 'BR' ? 'BRL' : 'USD',
  });

  const referencValue = () => {
    if (!cupom) return value;

    if (cupom.type == 'percentage') return value * ((100 - cupom.desconto) / 100);

    if (cupom.type == 'amount') return cupom.desconto >= value ? value : value - cupom.desconto;

    if (cupom.type == 'unitary') return cupom.desconto >= value ? value : value - cupom.desconto;
  };

  return (
    <Wrapper>
      {formatCurrency.format(referencValue())}
      {locale !== 'BR' && sufix && <p className="usd">USD</p>}{' '}
      {referencValue() < value && <p className="referenceName"> {formatCurrency.format(value)}</p>}
    </Wrapper>
  );
};

FormatCurrency.propTypes = {
  value: PropTypes.number,
  cupom: PropTypes.object,
  locale: PropTypes.string,
  sufix: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  cupom: state.cart.cupom,
  locale: state.config.locale,
});

export default connect(mapStateToProps, null)(FormatCurrency);
