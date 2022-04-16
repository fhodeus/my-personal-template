import React from 'react';
import { Wrapper } from './Wrapper';
import PropTypes from 'prop-types';

function Label({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

Label.propTypes = {
  children: PropTypes.func,
};

export default Label;
