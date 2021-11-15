import styled from 'styled-components';
import { BiEdit } from 'react-icons/bi';

export const ContainerOrderInModal = styled.div`
  background: ${({ theme }) => theme.colors.white}
  padding: 1rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
`;

export const SelectStyled = styled.select`
  padding: 0.8rem;
`;

export const ContainerFlex = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const StyledEditIcon = styled(BiEdit)`
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
