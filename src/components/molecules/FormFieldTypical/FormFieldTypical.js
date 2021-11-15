import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledLabel = styled.label`
  width: 200px;
`;

const FormFieldTypical = ({ onChange, value, type = 'text', name, labelText, placeholder }) => {
  return (
    <Container>
      <StyledLabel htmlFor={name}>{labelText}</StyledLabel>
      <input id={name} name={name} type={type} checked={value} value={value} onChange={onChange} placeholder={placeholder} />
    </Container>
  );
};

export default FormFieldTypical;
