/* eslint-disable */
import { useState, useContext } from 'react';
import { CartContext } from '../../App';
import { useParams } from 'react-router-dom';
import { Box, Grid, Text, Anchor, Layer, Button, Image } from 'grommet';
import { AddCircle, FormClose, StatusGood } from 'grommet-icons';

const ItemMenu = ({ data, handleCart }) => {
    const { name, description, price, calories, photo_url, item_Id } = data
    if (!calories){
        console.log(data)
    }
    
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
            height={{ min: '200px' }}
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
                   
                ]}
                columns={['1/3', 'flex']}
                rows={['flex']}
                gap="medium"
                // border={'bottom'}
            >
                <Box height={{ max: '180px' }} round='small' overflow='hidden'>
                    <Image
                        fit="cover"
                        src={`${photo_url}`}
                    />
                </Box>
                <Box>
                    <Text size='small'>
                        <h2 style={{color:'#5C5C5C'}}>{name}</h2>
                        <h4 style={{color:'#FF0000'}}>${price} | {calories} cal. </h4>
                        <p style={{color:'#5C5C5C'}}>{description}</p>
                    </Text>
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
                        <Button icon={<FormClose/>} onClick={onClose} plain />
                    </Box>
                </Layer>
            )}
        </Box>
    );
};

export default ItemMenu;