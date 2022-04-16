import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${(props) => props.width};

  padding: 0 10px;
`;

export const Input = styled.input`
  margin-bottom: 20px;

  width: 100%;
  height: auto;
  border-radius: 0px;
  border-width: 0px 0px 2px;
  border-top-style: initial;
  border-right-style: initial;
  border-left-style: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-left-color: initial;
  border-image: initial;
  border-bottom-style: solid;
  border-bottom-color: rgb(221, 221, 221);
  outline: 0px;
  font-size: 14px;
  padding: 7px 0px;
  background: transparent;
  transition: border-color 0.2s ease 0s;
  font-weight: 700;

  ::placeholder {
    color: red;
  }
`;

export default { Wrapper, Input };
