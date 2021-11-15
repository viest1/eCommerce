import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 1rem;
  position: relative;
  :after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: ${({ isFocus }) => (isFocus ? '100%' : '0%')};
    height: 2px;
    background-color: #4caf50;
    transition: 0.6s;
  }
  label {
    position: absolute;
    left: 0;
    width: 100%;
    top: 9px;
    color: #aaa;
    transition: 0.6s;
    letter-spacing: 0.5px;
  }
  ${({ isFocus }) =>
    isFocus &&
    `
    label{
     top: -12px; 
     font-size: 12px; 
     color: #4caf50; 
     transition: 0.6s;
    }
  `}
`;

export const StyledInput = styled.input`
  border: 0;
  padding: 4px 0;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
  outline: none;
  z-index: 1;
`;
