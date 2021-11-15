import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin: 2rem auto 0 auto;
  position: relative;
  background: ${({ theme }) => (theme.colors.blackHover ? theme.colors.toBlackHover : theme.colors.toWhiteHover)};
  * {
    transition: 0.4s;
  }
`;

export const ContainerBoxSettings = styled.form`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-basis: 33.3%;
  height: auto;
  *:hover {
    cursor: pointer;
  }

  background: ${({ theme }) => (theme.colors.toBlackHover ? theme.colors.blackHover : theme.colors.whiteHover)};
`;

export const ContainerOutlet = styled.div`
  flex-basis: 66.6%;
`;

export const H2Styled = styled.h2`
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

export const ContainerPBoxSettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
