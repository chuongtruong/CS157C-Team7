/* eslint-disable */
import { useState, useContext } from 'react';
import { CartContext } from '../../App';

import { Box } from 'grommet';
import AppFooter from '../AppFooter/AppFooter';
import Menu from '../Menu/Menu';
import {
    useParams
} from "react-router-dom";

const MainSection = () => {
    const { id } = useParams();
    
    const [itemInCart, setItemInCart] = useContext(CartContext)

    const handleSetItemToCart = ((item) => {
        setItemInCart([ ...itemInCart, item ])
        console.log(itemInCart);
    })

    return(
        <Box
            direction="column"
            // border={{size: 'small' }}
            pad="xsmall"
            height={{min: '8vh', max: '85vh'}}
            style={{position: 'relative'}}
        >
            <Menu
                handleCart = {handleSetItemToCart}
            />
            <AppFooter
                justify='baseline' border={{size: 'xsmall' }}
                table_number={id}
                item={itemInCart}
                itemCount={itemInCart.length}
               /> 
        </Box>
    );
};

export default MainSection;