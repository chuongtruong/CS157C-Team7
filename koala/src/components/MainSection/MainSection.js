/* eslint-disable */
import { useContext } from 'react';
import { CartContext } from '../../App';

import { Box } from 'grommet';
import Menu from '../Menu/Menu';
import {
    useParams
} from "react-router-dom";

const MainSection = () => {

    const [itemInCart, setItemInCart] = useContext(CartContext)

    const handleSetItemToCart = ((item) => {
        setItemInCart([ ...itemInCart, item ])
    })

    return(
        <Box
            direction="column"
            pad="xsmall"
            height={{min: '8vh', max: '85vh'}}
            style={{position: 'relative'}}
            background={{ color: '#FFFAE7' }}
        >
            <Menu
                handleCart = {handleSetItemToCart}
            />
        </Box>
    );
};

export default MainSection;