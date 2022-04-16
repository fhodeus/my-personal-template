import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${(props) => props.column && 'flex-direction:column'};
  height: ${(props) => props.height || 'auto'};

  position: relative;

  gap: 20px;

  & > * {
    width: 100%;
  }
`;

export default Wrapper;
