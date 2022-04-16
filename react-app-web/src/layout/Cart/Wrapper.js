import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: ${(props) => (props.collapsed ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  z-index: 999;
`;

export const CartWrapper = styled.div`
  width: ${(props) => (props.collapsed ? '25%' : '0')};
  display: ${(props) => (props.collapsed ? 'flex' : 'none')};
  flex-direction: column;
  height: 100%;
  position: fixed;
  right: 0px;
  overflow: auto;
  background-color: white;

  z-index: 999;

  animation: slidecart 0.3s;

  @keyframes slidecart {
    0% {
      right: -25%;
    }
    100% {
      right: 0px;
    }
  }

  & > * {
    padding: 20px 10px;
  }
`;

export const CartHeader = styled.h1`
  font-size: 1.6rem;
  display: flex;

  border-top: 2px black dashed;
  border-bottom: 2px black dashed;
  border-left: 2px black dashed;

  .close {
    height: 100%;
    font-size: 1.6rem;
    background: transparent;
    color: red;
    margin: 0;
    border: 0;
    margin-left: auto;
    cursor: pointer;
  }
`;

export const CartFooter = styled.div`
  background: black;
  bottom: 0;
  width: 100%;

  border-top: 2px yellow dashed;
  border-bottom: 2px yellow dashed;
  border-left: 2px yellow dashed;

  .checkout {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 5px white solid;
    background: transparent;
    color: white;

    margin-left: auto;
    margin-bottom: 20px;
  }
`;

export const CartBody = styled.div`
  border-left: 2px black dashed;
  height: 100%;

  overflow: auto;
`;
