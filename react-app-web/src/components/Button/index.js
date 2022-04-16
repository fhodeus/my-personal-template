import styled from 'styled-components';

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 5px black solid;
  font-size: 2rem;

  padding: 10px 10px;
  background: transparent;
  font-weight: 600;

  cursor: pointer;

  &:hover:enabled,
  &.select {
    background: black;
    color: yellow;
  }

  &.checkout {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 5px white solid;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 10px 10px;

    height: min-content;

    background: transparent;
    color: white;

    margin-left: auto;

    cursor: pointer;
  }
`;

export default Wrapper;
