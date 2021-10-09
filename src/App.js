import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './components/NavBar';
import { Menu } from './components/menu';

const GlobalStyle = createGlobalStyle`
    html{
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    Body{
      margin: 0;
      backfround-color: #f0f0f0;
      font-family: Roboto, sans-serif:
      font-size: 20px
      color: black
    }

    img {
      max-width: 100%;
      height: auto;
    }
    a{
      text-decoration: none;
      color: inherit;
    }
    ul {
      list-slyle: none;
    }
    p {
      font-family: roboto, sans-serif;
      padding: 0px;
      margin: 0px;

    h1,h2,h3,h4,h5,h6 {
      font-family: Pacifico, sans-serif;
      padding: 0px;
      margin: 0px;
    }
    button {
      cursor: pointer;
    }

    input, button {
      font-family: inherit;
    }
`;



function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Menu />
    </>
  );
}

export default App;

//first commit
