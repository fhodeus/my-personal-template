import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  margin: auto;
  width: ${(props) => (props.width ? props.width : '100%')};

  height: 100%;
`;

export default Wrapper;
