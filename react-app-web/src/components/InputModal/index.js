import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input } from './Wrapper';
import Label from '../Label';

function InputModal({ label, width = '100%' }) {
  return (
    <Wrapper style={{ width }}>
      <Label>{label}</Label>
      <Input />
    </Wrapper>
  );
}

InputModal.propTypes = {
  label: PropTypes.string,
  width: PropTypes.string,
};

export default InputModal;
