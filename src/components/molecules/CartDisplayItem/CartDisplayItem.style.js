import styled from 'styled-components';

export const ContainerProductsCart = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

export const ImgStyled = styled.img`
  height: 80px;
  @media only screen and (max-width: 550px) {
    height: 40px;
  }
`;

export const ContainerQuantity = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
  flex-basis: 33.3%;
`;

export const ButtonStyledBefore = styled.button`
  height: 25px;
  width:25px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  color: ${({ theme }) => theme.colors.black}
  font-size: 16px;
  font-weight: bold;
  border-radius:50%;
  position:absolute;
  left:-1.4rem;
`;
export const ButtonStyledAfter = styled.button`
  height: 25px;
  width:25px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  color: ${({ theme }) => theme.colors.black}
  font-size: 16px;
  font-weight: bold;
  border-radius:50%;
  position:absolute;
  right:-1.6rem;
`;
export const PStyled = styled.p`
  padding: 0.5rem;
  height: 25px;
  text-align: center;
  display: flex;
  align-items: center;
  background: none;
  position: relative;
`;

export const FlexItemP = styled.p`
  flex-basis: 33.3%;
  text-align: right;
`;

export const ContainerFlexItemsP = styled.div`
  flex-basis: 66.6%;
  display: flex;
`;
