import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  z-index: 10;
`;

export const HeaderItem = styled.div`
  margin: 20px 40px;

  &:hover {
    cursor: pointer;
  }
`;
