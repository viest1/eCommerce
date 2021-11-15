import React, { useContext } from 'react';
import { ECommerceContext } from '../../../providers/GeneralProvider';
import { Container, SelectStyled } from './PaymentSettings.styles';

const PaymentSettings = () => {
  const { selectPayment, setSelectPayment } = useContext(ECommerceContext);

  const handleSelectPayment = (e) => {
    setSelectPayment(e.target.value);
  };

  return (
    <Container>
      <h2>Payment Settings</h2>
      <SelectStyled name="payment" id="payment" value={selectPayment} onChange={handleSelectPayment}>
        <option value="" disabled>
          Choose Default Payment
        </option>
        <option value="paypal">Paypal</option>
        <option value="creditCard">Credit Card</option>
      </SelectStyled>
      <h2>Your Billings:</h2>
      <p>1. 11.11.2011 - €253</p>
      <p>2. 12.11.2012 - €653</p>
      <p>3. 13.11.2013 - €453</p>
      <p>4. 14.11.2014 - €353</p>
    </Container>
  );
};

export default PaymentSettings;
