/* eslint-disable */
import { useState, useContext } from 'react';
import { CartContext } from '../../App';
import { useParams } from 'react-router-dom';
import { Box, Grid, Text, Anchor, Layer, Button } from 'grommet';
import { AddCircle, FormClose, StatusGood } from 'grommet-icons';

const ItemMenu = ({ data, handleCart }) => {
    const { name, desc, price, calories, url, category, item_Id } = data
    const [open, setOpen] = useState();
    const [selectedItem, setSelectedItem] = useState();
    const [cartCtxt, setCartDetail] = useContext(CartContext);

    const addBtnHdler = (itemName, itemID) => {
        setSelectedItem(itemName);
        setCartDetail(currentItems => [...currentItems, itemID])
        setOpen(true);
        handleCart(data)
        setTimeout(() => {
            setOpen(undefined);
            setSelectedItem(undefined);
        }, 3000);
    };

    const onClose = () => setOpen(undefined);

    return (
        <Box
            width='90vw'
            height={{ min: '50px' }}
            margin={{ bottom: 'medium' }}
            background={{ color: '#F1F1F1' }}
            round='medium'
            pad={{ left: 'medium', right: 'medium' }}
            animation={{ type: 'fadeIn', duration: 1500 }}
            justify='center'
            elevation="medium"
        >
            <Grid
                fill
                areas={[
                    { name: 'item-name', start: [0, 0], end: [0, 0] },
                    { name: 'price', start: [1, 0], end: [1, 0] },
                    { name: 'calories', start: [2, 0], end: [2, 0] },
                    { name: 'add-btn', start: [3, 0], end: [4, 0] },
                ]}
                columns={['1/4', 'flex']}
                rows={['flex']}
                gap="xsmall"
            // border={'bottom'}
            >

                <Box justify='center' align='start' gridArea="item-name">
                    <Text size='small'>
                        <h3>{name}</h3>
                    </Text>
                </Box>
                <Box justify='center' align='center' gridArea="price">
                    <Text color='red' size='small'>
                        <h3>${price}</h3>
                    </Text>
                </Box>
                <Box justify='center' align='center' gridArea="calories">
                    <Text color='green' size='small'>
                        <h3>{calories} cal.</h3>
                    </Text>
                </Box>
                <Box justify='center' align='end' gridArea="add-btn">
                    <Anchor onClick={() => addBtnHdler(name, item_Id)}>
                        <AddCircle color='plain' size='30px' />
                    </Anchor>
                </Box>
                
            </Grid>
            {open && (
                <Layer
                    position="top"
                    modal={false}
                    margin={{ vertical: 'medium', horizontal: 'small' }}
                    onEsc={onClose}
                    responsive={false}
                    plain
                >
                    <Box
                        align="center"
                        direction="row"
                        gap="small"
                        justify="between"
                        round="medium"
                        elevation="medium"
                        pad={{ vertical: 'xsmall', horizontal: 'small' }}
                        background="status-ok"
                    >
                        <Box align="center" direction="row" gap="xsmall">
                            <StatusGood />
                            <Text>
                                <Text weight='bold'>{selectedItem}</Text> {' \n'}was added to cart.
                            </Text>
                        </Box>
                        <Button icon={<FormClose />} onClick={onClose} plain />
                    </Box>
                </Layer>
            )}
        </Box>
    );
};

export default ItemMenu;