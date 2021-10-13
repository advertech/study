import React from 'react';

import { NavBar } from './components/NavBar';
import { Menu } from './components/menu';
import { GlobalStyle } from './components/GlobalStyle';
import { ModalItem } from './components/ModalItem';
import { Order } from './components/order';
import { useOpenItem } from './components/hooks/useOpenItem';

function App() {

  const openItem = useOpenItem();

  console.log('item: ', openItem)

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} />}
    </>
  );
}

export default App;
