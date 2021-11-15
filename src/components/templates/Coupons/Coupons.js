import React from 'react';
import { ContainerCoupon, Container, StyledP } from './Coupons.styles';

const Coupons = () => {
  return (
    <Container>
      <ContainerCoupon>
        <h2>Coupon</h2>
        <p>
          PROMO CODE TO <span style={{ fontWeight: 'bold' }}>-90%</span>:{' '}
        </p>
        <StyledP>4343232131</StyledP>
      </ContainerCoupon>
    </Container>
  );
};

export default Coupons;
