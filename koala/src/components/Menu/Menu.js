/* eslint-disable */
import { useContext, useEffect, useState } from 'react';
import { Box, Spinner, Text } from 'grommet';
import {SocketContext} from '../../context/socket';
import { getAllDrinks } from '../../api/api';

import ItemMenu from '../Item/ItemMenu';
import { CartContext } from '../../App';

const Menu = ({handleCart}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const socket = useContext(SocketContext);
    
    
    useEffect(() => {
        Promise.all(getAllDrinks()
        .then(values => {
            setItems(values.data)
        }))
    }, [])

    return(
        <Box
            height={{max: '70vh'}}
            justify='start'
            align='center'
            overflow={{vertical:"scroll"}}
            direction="column"
            pad="small"
        >
            {
              items.length > 0 ? 
              (
                items.map(item => <ItemMenu handleCart={handleCart} key={item.id} data={item}/>)
              ) 
              : 
              (
                <Box>
                    <Spinner color={`graph-${3}`}></Spinner>
                </Box>
              )
          }
        </Box>
    );
};

export default Menu;