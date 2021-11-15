import React, { useContext } from 'react';
import { sumQuantity } from '../../../helpers/sumQuantity';
import Button from '../../atoms/Button/Button';
import { ECommerceContext } from '../../../providers/GeneralProvider';
import { sumCart } from '../../../helpers/sumCart';
import { useNavigate } from 'react-router-dom';
import { ContainerOrderInModal, ContainerFlex, StyledEditIcon, SelectStyled } from './ModalDetailsCheckout.styles';

const ModalDetailsCheckout = ({ handleBuyAfterCheck, handleCancelBuy }) => {
  const { name, address, selectPayment, setSelectPayment, itemsInCart, discount, select } = useContext(ECommerceContext);
  let navigate = useNavigate();
  const handleSelectPayment = (e) => {
    setSelectPayment(e.target.value);
  };

  const totalCalculated = () => {
    return discount ? +(((100 - discount) / 100) * (sumCart(itemsInCart) + select)).toFixed(2) : +(+sumCart(itemsInCart) + select);
  };

  const handleRedirectToEditPersonalData = (e) => {
    e.preventDefault();
    navigate('/settings/personal');
  };

  return (
    <div>
      <ContainerOrderInModal>
        <h2>Yeey! You Rock!</h2>
        <p>
          You buy {sumQuantity(itemsInCart)} {sumQuantity(itemsInCart) === 1 ? 'item' : 'items'}{' '}
        </p>
        <p>Total Cost: {totalCalculated()}€ </p>
        <ContainerFlex>
          <p>
            Data: {name.firstName} {name.lastName}
          </p>
          <StyledEditIcon onClick={handleRedirectToEditPersonalData} />
        </ContainerFlex>
        <ContainerFlex>
          <p>
            Shipping Address: {address.city} {address.street} {address.numberStreet}
          </p>
          <StyledEditIcon onClick={handleRedirectToEditPersonalData} />
        </ContainerFlex>
        <SelectStyled name="payment" id="payment" value={selectPayment} onChange={handleSelectPayment}>
          <option value="" disabled>
            Choose Default Payment
          </option>
          <option value="paypal">Paypal</option>
          <option value="creditCard">Credit Card</option>
        </SelectStyled>
        <p>All is Correct?</p>
        <Button text="Yes, Buy IT!" onClick={handleBuyAfterCheck} />
        <Button text="No, I need Edit something" onClick={handleCancelBuy} />
      </ContainerOrderInModal>
    </div>
  );
};

export default ModalDetailsCheckout;
