import React, { useEffect, useState } from 'react';
import { Container, StyledInput } from './FormField.styles';

const FormField = ({ onChange, value, type = 'text', name, labelText, placeholder }) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = () => {
    if (value) {
      return;
    } else {
      setIsFocus(false);
    }
  };

  useEffect(() => {
    if (value) {
      setIsFocus(true);
    }
  }, [value]);

  return (
    <Container isFocus={isFocus}>
      <StyledInput
        isFocus={isFocus}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      {labelText && <label htmlFor={name}>{labelText}</label>}
    </Container>
  );
};

export default FormField;
