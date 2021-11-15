import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: minmax(450px, 800px) minmax(350px, 400px);
  justify-content: center;
  height: 600px;
  * {
    transition: 1s;
  }
  @media only screen and (max-width: 1110px) {
    grid-template-columns: 1fr 350px;
    margin: 0;
  }
  @media only screen and (max-width: 986px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    height: auto;
  }
`;

export const ContainerCart = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 4rem;
  background: ${({ theme }) => (theme.colors.toWhiteHover ? theme.colors.toWhiteHover : theme.colors.toBlackHover)};
  height: 100%;
  overflow: auto;
  @media only screen and (max-width: 660px) {
    padding: 1rem;
  }
`;

export const ContainerOrderSummary = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 2rem 1rem 2rem 1rem;
  height: 100%;
  background: ${({ theme }) => (theme.colors.toWhiteHover ? theme.colors.whiteHover : theme.colors.blackHover)};
`;

export const ContainerFlexSpace = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

export const ContainerFlexColumn = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContainerTitlesCart = styled.div`
  display: flex;
  justify-content: space-between;
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

export const FlexItemP = styled.p`
  flex-basis: 33.3%;
  text-align: right;
`;

export const ContainerFlexItemsP = styled.div`
  flex-basis: 66.6%;
  display: flex;
`;
