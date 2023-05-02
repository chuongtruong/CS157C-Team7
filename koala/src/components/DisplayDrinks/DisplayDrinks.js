/* eslint-disable */
import { useContext, useEffect, useState } from 'react';
import { Box, Spinner, Text } from 'grommet';
import {SocketContext} from '../../context/socket';

import ItemMenu from '../Item/ItemMenu';
import { CartContext } from '../../App';

const DisplayDrinks = ({handleCart}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const socket = useContext(SocketContext);

    // useEffect(() => {
    //     socket.on('connect', () => {
    //         socket.send('\n\n\n\n\nI am a client\n\n\n\n');
    //     });

    //     socket.on('message', (data) => {
    //         console.log("Received ", data);
    //         socket.emit('\n\n\n\n\nI am a client\n\n\n\n');
    //     });

    //     socket.on('disconnect', () => {
    //       setIsConnected(false);
    //     });
    
    //     socket.on('pong', () => {
    //       setLastPong(new Date().toISOString());
    //     });
    
    //     return () => {
    //       socket.off('connect');
    //       socket.off('disconnect');
    //       socket.off('pong');
    //     };
    //   }, []);

    useEffect(() => {
        fetch("http://localhost:3008/getDrinks")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    console.log("Error fetching categories");
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return(
        /*
        <Box
            // border={{size: 'xsmall' }}
            height={{max: '80vh'}}
            justify='start'
            align='center'
            overflow={{vertical:"scroll"}}
            direction="column"
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
        */
        <div className="col">
        <h1>Koala Tea</h1>
        <p>This is the menu!</p>
        <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
        {items.map((itemCol, key) => {
          return (
            <tr key={key}>
              <td>{itemCol.name}</td>
              <td>{itemCol.price}</td>
              <td>{itemCol.description}</td>
              <td>
                <img height="25%" align="center" width="25%" style = {{display:'block'}} src = {itemCol.photo_url}/>
              </td>
            </tr>
          )
        })}
      </table>
      </div>
    );
};

export default DisplayDrinks;