import { useState, createContext } from "react";

import { Grommet } from 'grommet';
import AppLayout from './components/AppLayout/AppLayout';
import { SocketContext, socket } from './context/socket';

const theme = {
  global: {
    font: {
      family: 'Pacifico',
    },
    colors: {
      background: '#FFFAE7', // or any other color name, hex value, or CSS color string
    },
  },
}
export const CartContext = createContext()

function App() {
  const [itemInCart, setItemInCart] = useState([]);
  return (
    // <SocketContext.Provider value={socket}>
      <CartContext.Provider value={[itemInCart, setItemInCart]}>
        <Grommet theme={theme} full>
          <AppLayout />
        </Grommet >
      </CartContext.Provider>
    // </SocketContext.Provider>
  );
}

export default App;