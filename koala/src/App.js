import { useState, createContext } from "react";

import { Grommet } from 'grommet';
import AppLayout from './components/AppLayout/AppLayout';
import { SocketContext, socket } from './context/socket';
import DisplayDrinks from './components/DisplayDrinks/DisplayDrinks.js';
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
    <div>
      <CartContext.Provider value={[itemInCart, setItemInCart]}>
        <Grommet theme={theme} full>
          <AppLayout />
          {/* <DisplayDrinks/> */}
        </Grommet >
      </CartContext.Provider>
      </div>
    // </SocketContext.Provider>
  );
}

export default App;