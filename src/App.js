import React from 'react';

import { NavBar } from './components/NavBar';
import { Menu } from './components/menu';
import { GlobalStyle } from './components/GlobalStyle';
import { ModalItem } from './components/ModalItem';
import { Order } from './components/order';

function App() {

  const [openItem, setOpenItem] = React.useState(null);

  console.log('item: ', openItem)

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu setOpenItem={setOpenItem} />
      <ModalItem openItem={openItem} setOpenItem={setOpenItem} />
    </>
  );
}

export default App;
