import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
`;

export const ContainerDetailsToBuy = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const ContainerCart = styled.div`
  position: fixed;
  top: 0;
  right: -400px;
  transition: 0.5s;
  z-index: 1;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 400px;
  height: 100vh;
  overflow: auto;
  background: ${({ theme }) => (theme.colors.toBlackHover ? theme.colors.toBlackHover : theme.colors.toWhiteHover)};
`;

export const ContainerOrderSummary = styled.div`
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ContainerInOrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 1rem 0 1rem 0;
`;

export const SelectStyled = styled.select`
  padding: 0.8rem;
`;
