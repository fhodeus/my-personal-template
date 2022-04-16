import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  margin-bottom: 8px;
`;

export const ProductImage = styled.img`
  border: 1px solid black;

  width: auto;
  height: auto;
  max-height: 78.5px;
  max-width: 78.5px;
`;

export const ProductInfo = styled.div`
  text-transform: capitalize;
  ${(props) => props.min && `font-size: 0.8rem;`}
  ${(props) => props.inline && `display: inline-block`}
`;

export const ProductInfoBlock = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  padding-left: 10px;
  display: block;
`;

export const ProductAction = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  color: red;
  background: white;
  z-index: 999;
  padding: 10px;

  cursor: pointer;
`;
