import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.grey}
  }

  #root {
    min-height: 100vh;
    background-color: ${({ theme }) => (theme.colors.blackHover ? '#1a1919' : theme.colors.green100)};
    font-size:14px;
    font-family: 'Nunito', sans-serif;
    transition: background-color 0.4s ease;
  }
  input,button,textarea{
    font-family: 'Nunito', sans-serif;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-button {
    width: 75px; //for horizontal scrollbar
    height: 75px; //for vertical scrollbar
  }

  ::-webkit-scrollbar-track {
    display:none;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border: 6px solid #6aa7b350;
    border-left: 0;
    border-right: 0;
    background-color: ${({ theme }) => theme.colors.green200}
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 400ms;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
    background-color:rgb(0 0 0 / 75%);
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }

  .Modal {
    background-color: ${({ theme }) => theme.colors.white};
  }
  .Overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0 0 0 / 75%);
  }
  .navLink{
    list-style: none;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-size: 15px;
    font-weight: bold;
    &:after {
      display: block;
      content: '';
      border-bottom: solid 3px ${({ theme }) => theme.colors.black};
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    &:hover {
      cursor: pointer;
    }
    &:hover:after {
      transform: scaleX(1);
    }
  }
  .navLink-active{
    border-bottom: solid 1px ${({ theme }) => theme.colors.black};
  }
  .navLinkAccount{
    padding: 0.5rem 1rem 0.5rem 1rem;
    list-style: none;
    text-decoration: none;
    &:hover {
      background: ${({ theme }) => (theme.colors.toBlackHover ? theme.colors.toBlackHover : theme.colors.toWhiteHover)};
    }
  }
`;
