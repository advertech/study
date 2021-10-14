import React from 'react';

import { NavBar } from './components/NavBar/NavBar';
import { Menu } from './components/Menu/menu';
import { GlobalStyle } from './components/Style/GlobalStyle';
import { ModalItem } from './components/Modal/ModalItem';
import { Order } from './components/Order/order';
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
