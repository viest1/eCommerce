import styled from 'styled-components';

export const Container = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  div {
    width: 200px;
  }
`;

export const SelectStyled = styled.select`
  padding: 0.8rem;
`;
