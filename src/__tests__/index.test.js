import React from 'react';
import { renderWithProviders } from '../helpers/renderWithProviders';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import App from '../views/App';
import { render } from '@testing-library/react';
import FormAuth from '../components/templates/FormAuth/FormAuth';
import ProductCard from '../components/molecules/ProductCard/ProductCard';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe('Form Auth', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormAuth />);
    screen.getByText('Log In');
  });
});

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormAuth />);
    const loginTest = screen.getByPlaceholderText('Enter Login');
    const passwordTest = screen.getByPlaceholderText('Enter Password');
    fireEvent.change(loginTest, { target: { value: 'admin' } });
    fireEvent.change(passwordTest, { target: { value: '123' } });
  });
});

describe('Product Card', () => {
  it('Renders the component', () => {
    renderWithProviders(<ProductCard item={{ title: '1', price: '2', imgSrc: '', quantity: 1, id: '3' }} />);
    screen.getByText('SHIPPING');
    screen.getByText('1');
  });
});

describe('App', () => {
  it('Renders the component', () => {
    render(<App />);
    screen.getByText('PRODUCTS');
  });
});

describe('App Overall', () => {
  it('Click on Button Log In', async () => {
    render(<App />);
    const button = screen.getByText('Log In');
    const loginTest = screen.getByPlaceholderText('Enter Login');
    const passwordTest = screen.getByPlaceholderText('Enter Password');
    fireEvent.change(loginTest, { target: { value: 'admin' } });
    fireEvent.change(passwordTest, { target: { value: '123' } });
    fireEvent.click(button);
  });
});
