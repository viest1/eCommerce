import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
`;

export const ContainerCoupon = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  gap: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.black};
`;

export const StyledP = styled.p`
  border: 3px solid ${({ theme }) => theme.colors.black};
  padding: 2rem;
`;
