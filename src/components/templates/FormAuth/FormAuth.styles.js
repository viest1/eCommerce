import styled from 'styled-components';

export const FormContainer = styled.form`
  margin: 2rem auto 2rem auto;
  width: 900px;
  height: 600px;
  background: ${({ theme }) => (theme.colors.toWhiteHover ? theme.colors.toWhiteHover : theme.colors.toBlackHover)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media only screen and (max-width: 980px) {
    width: 95%;
  }
  * {
    transition: 1s;
    font-size: 1.1rem;
    @media only screen and (max-width: 980px) {
      font-size: 0.8rem;
    }
  }
  label {
    text-align: left;
  }
  input {
    padding: 0.7rem 1rem;
    border: none;
    outline: none;
  }
  input[type='submit'] {
    padding: 0.7rem 2rem 0.7rem 2rem;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.colors.black};
    transition: 0.3s;

    &:hover {
      background: ${({ theme }) => (theme.colors.blackHover ? theme.colors.blackHover : theme.colors.whiteHover)};
      cursor: pointer;
    }
  }
`;

export const Rotate = styled.div`
  transform: rotate(45deg);
  position: relative;
  left: -20px;
  top: 120px;
`;
export const Rotate1 = styled.div`
  transform: rotate(-45deg);
  position: relative;
  left: 80px;
  top: 120px;
`;
export const Rotate2 = styled.div`
  transform: rotate(60deg);
  position: relative;
  left: 160px;
  top: 120px;
`;
export const Rotate3 = styled.div`
  transform: rotate(60deg);
  position: relative;
  left: 260px;
  top: 120px;
`;
export const Rotate4 = styled.div`
  transform: rotate(75deg);
  position: relative;
  left: -190px;
`;
export const Rotate5 = styled.div`
  transform: rotate(-75deg);
  position: relative;
  left: -280px;
`;
