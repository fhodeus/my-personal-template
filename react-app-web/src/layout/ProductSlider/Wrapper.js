import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: black;

  img {
    width: auto;
    height: auto;
    max-width: 500px;
    height: 500px;
  }
`;

export const ProductInfo = styled.div`
  display: block;
  width: 50% !important;
  height: 100%;
  background: yellow;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ProductName = styled.p`
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 900;
`;

export const ProductValue = styled.p`
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 900;
`;

export const SKU = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 900;
`;
