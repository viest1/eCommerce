import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 120px;
`;

export const ContainerDetails = styled.div`
  display: flex;
`;

export const ImgStyled = styled.img`
  height: 120px;
`;

export const ContainerTitlePrice = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  width: 110px;
`;

export const ContainerCounter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: space-between;
  align-items: center;
  width: 110px;
`;

export const StyledP = styled.p`
  font-size: 16px;
`;
