import styled from 'styled-components';

export const Wrapper = styled.div`
  display: ${(props) => (props.collapsed ? 'flex' : 'none')};
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  top: 0;
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  display: ${(props) => (props.collapsed ? 'flex' : 'none')};
  flex-direction: column;

  width: ${(props) => (props.collapsed ? '25%' : '0')};
  height: min-content;
  position: fixed;

  overflow: auto;
  background-color: white;

  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  margin: auto;
  z-index: 999;

  & > * {
    padding: 20px 10px;
  }
`;

export const ModalHeader = styled.h1`
  display: flex;
  justify-content: space-between;

  border: 2px black dashed;

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

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0 10px;

  border: 2px yellow dashed;
  border-top: 0;

  background: black;
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;

  border: 2px black dashed;
  border-bottom: 0;
  border-top: 0;
`;
