import React, { useContext, useState } from 'react';
import FormFieldTypical from '../../molecules/FormFieldTypical/FormFieldTypical';
import Button from '../../atoms/Button/Button';
import { ECommerceContext } from '../../../providers/GeneralProvider';
import { Container } from './AccountSettings.styles';

const AccountSettings = () => {
  const [resetAccountSettings, setResetAccountSettings] = useState(false);
  const { setSelectPayment, setNotificationEmail, setName, setAddress } = useContext(ECommerceContext);

  const handleResetAccountSettings = (e) => {
    setResetAccountSettings(e.target.checked);
  };
  const handleSubmitAccountSettings = (e) => {
    e.preventDefault();
    if (resetAccountSettings) {
      localStorage.removeItem('nameECommerce');
      localStorage.removeItem('addressECommerce');
      localStorage.removeItem('notificationEmailECommerce');
      localStorage.removeItem('selectPaymentECommerce');
      setNotificationEmail(false);
      setName({
        firstName: '',
        lastName: '',
      });
      setAddress({
        city: '',
        street: '',
        numberStreet: '',
      });
      setSelectPayment('');
    }
  };

  return (
    <Container onSubmit={handleSubmitAccountSettings}>
      <h2>Account Settings</h2>
      <FormFieldTypical
        labelText="Reset my Data Account: Personal Information, Notification Settings and Payment Default Settings"
        type="checkbox"
        onChange={handleResetAccountSettings}
        value={resetAccountSettings}
        name="emailNotification"
      />
      <div>
        <Button text="CLICK TO RESET" />
      </div>
    </Container>
  );
};

export default AccountSettings;
