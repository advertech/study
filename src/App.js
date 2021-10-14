import React from 'react';

import { NavBar } from './components/NavBar';
import { Menu } from './components/menu';
import { GlobalStyle } from './components/GlobalStyle';
import { ModalItem } from './components/ModalItem';
import { Order } from './components/order';
import { useOpenItem } from './components/hooks/useOpenItem';
import { useOrders } from './components/hooks/useOrders';
function App() {

  const openItem = useOpenItem();
  const orders = useOrders();

  console.log('item: ', openItem)

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order {...orders} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem}  {...orders} />}
    </>
  );
}

export default App;
