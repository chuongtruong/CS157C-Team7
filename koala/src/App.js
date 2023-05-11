import { useState, createContext } from "react";

import { Grommet } from 'grommet';
import AppLayout from './components/AppLayout/AppLayout';
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

export const CartContext = createContext();
export const CategoryContext = createContext();

function App() {
  const [itemInCart, setItemInCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Brown Sugar");

  return (
    <div>
        <CategoryContext.Provider value={{selectedCategory, setSelectedCategory}}>
          <CartContext.Provider value={[itemInCart, setItemInCart]}>
            <Grommet theme={theme} full>
              <AppLayout />
            </Grommet>
          </CartContext.Provider>
        </CategoryContext.Provider>
      </div>
  );
}

export default App;