import React, { useContext } from 'react';
import FormField from '../../molecules/FormField/FormField';
import Button from '../../atoms/Button/Button';
import { ECommerceContext } from '../../../providers/GeneralProvider';
import { H2Styled, ContainerForm } from './PersonalSettings.styles';

const PersonalSettings = () => {
  const { name, setName, address, setAddress } = useContext(ECommerceContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <H2Styled style={{ marginBottom: '1rem' }}>Personal Information</H2Styled>
      <ContainerForm onSubmit={handleSubmit}>
        <FormField labelText="First Name" name="firstName" value={name.firstName} onChange={(e) => setName({ ...name, firstName: e.target.value })} />
        <FormField labelText="Last Name" name="lastName" value={name.lastName} onChange={(e) => setName({ ...name, lastName: e.target.value })} />
        <FormField labelText="City" name="city" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} />
        <FormField labelText="Street" name="street" value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} />
        <FormField
          labelText="Street Number"
          name="streetNumber"
          value={address.numberStreet}
          onChange={(e) => setAddress({ ...address, numberStreet: e.target.value })}
        />
        <div>
          <Button text="Changes Are Saved Automatically" />
        </div>
      </ContainerForm>
    </div>
  );
};

export default PersonalSettings;
