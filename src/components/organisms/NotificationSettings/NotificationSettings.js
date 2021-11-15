import React, { useContext } from 'react';
import FormFieldTypical from '../../molecules/FormFieldTypical/FormFieldTypical';
import Button from '../../atoms/Button/Button';
import { ECommerceContext } from '../../../providers/GeneralProvider';
import { Container } from './NotificationSettings.styles';

const NotificationSettings = () => {
  const { notificationEmail, setNotificationEmail } = useContext(ECommerceContext);

  const handleNotificationEmail = (e) => {
    setNotificationEmail(e.target.checked);
  };

  return (
    <Container>
      <h2>Notifications Settings</h2>
      <FormFieldTypical
        labelText="I want to receive e-mails with new information from the store"
        type="checkbox"
        onChange={handleNotificationEmail}
        value={notificationEmail}
        name="emailNotification"
      />
      <div>
        <Button text="Changes Are Saved Automatically" />
      </div>
    </Container>
  );
};

export default NotificationSettings;
