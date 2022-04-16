import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  input {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    font-size: 2rem;
    padding: 10px 20px;
    font-weight: bold;
    border: 0;
    text-transform: uppercase;
  }

  button {
    position: absolute;
    top: 0;
    right: 0px;

    width: min-content;
    height: 100%;

    font-size: 1rem;

    padding: 0px 15px;
    margin: 0;
    border: 0;

    background: white;

    &:hover {
      color: white;
      background: yellow;
    }
  }
`;

export const Description = styled.div`
  ${(props) =>
    props.children &&
    css`
      padding: 10px 20px 0 10px;
    `}

  color: white;
`;
