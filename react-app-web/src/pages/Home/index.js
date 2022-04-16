import React from 'react';

import Header from '../../layout/Header';
import ProductSlider from '../../layout/ProductSlider';
import Cart from '../../layout/Cart';
import Modal from '../../layout/Modal';

import { Wrapper } from './Wrapper';

export const Home = () => (
  <Wrapper>
    <Header />
    <Cart />
    <ProductSlider />
    <Modal />
  </Wrapper>
);

export default Home;
