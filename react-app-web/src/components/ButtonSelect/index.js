import styled, { css } from 'styled-components';
import Button from '../Button';

const Wrapper = styled(Button)`
  padding: 0px 10px;

  ${(props) =>
    props.selected &&
    css`
      background: black;
      color: white;
    `}

  &:disabled {
    border: 5px rgba(16, 16, 16, 0.3) solid;
  }
`;

export default Wrapper;
