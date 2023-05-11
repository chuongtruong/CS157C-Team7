/* eslint-disable */
import { useContext } from 'react';
import { CartContext } from '../../App';
import AppFooter from '../AppFooter/AppFooter';
import { Box } from 'grommet';
import Menu from '../Menu/Menu';
import { useParams } from "react-router-dom";

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
        >
            <Menu
                handleCart = {handleSetItemToCart}
            />
            <AppFooter/>
        </Box>
    );
};

export default MainSection;