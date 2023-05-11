/* eslint-disable */
import { Box, Anchor, Text, Grid, Layer, Spinner } from 'grommet';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../App';
import { useParams, useNavigate } from 'react-router-dom';
import { Close } from 'grommet-icons';
import ItemCart from '../Item/ItemCart';

const Cart = ({ item }) => {
    // maybe fetch data from the backend to see if there's any active order
    const { id } = useParams();
    const navigate = useNavigate();
    const [itemInCart, setItemInCart] = useContext(CartContext);
    const [ids, setIds] = useState([]);
    const drinksObject = {};
    const [open, setOpen] = useState(undefined);
    const [orderNumber, setOrderNumber] = useState(undefined)
    const [successMsgOpen, setSuccessMsgOpen] = useState(undefined);

    const [errMessage, setErrMessage] = useState(undefined)
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        console.log("Object.keys(itemsObject) ", Object.keys(drinksObject));
        setIds(Object.keys(drinksObject));
        return
    }, [itemInCart]);

    (itemInCart.forEach((item) => {
        if (drinksObject.hasOwnProperty(item._id)) {
            drinksObject[item._id]['quantity'] += 1
            drinksObject[item._id]['price'] = (item.price * drinksObject[item._id]['quantity']).toFixed(2)
        } else {
            drinksObject[item._id] = {
                'name': item.name,
                'quantity': 1,
                'price': item.price
            }
        }
    }))

    const placeOrderBtnHandler = async () => {
        setOpen(true);
        await setTimeout(() => {
            setOpen(undefined);
        }, 3000);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(drinksObject)
        };

        console.log('drink objects: ',drinksObject );

        const response = await fetch('http://localhost:3001/posts/createOrder', requestOptions);

        if (!response.ok) {
            setErrMessage(`Error! status: ${response.status}`)
        }

        const responseJSON = await response.json();

        await setOrderNumber(responseJSON["order_no"])
        setSuccessMsgOpen(true);
        await setTimeout(() => {
            setSuccessMsgOpen(undefined);
            setItemInCart([]);
        }, 5000);
        
    };

    const closeBtnHdler = () => {
        navigate(`/`);
    };

    return (
        <Box height='82vh' width='100vw' direction='column' >
            <Box margin={{ top: 'medium', bottom: 'large' }} pad={{ left: 'xsmall', right: 'small' }}>
                <Grid
                    columns={['3/4', '1/4']}
                    rows={['auto']}
                    areas={[['page-title', 'close-btn']]}
                    gap='small'
                >
                    <Box justify='center' gridArea="page-title">
                        <Text color='#5D5D5D' size='xxlarge'>
                            <strong>Cart</strong>
                        </Text>
                    </Box>
                    <Box justify='center' align='end' gridArea="close-btn">
                        <Anchor onClick={() => closeBtnHdler()}>
                            <Close color='plain' size='40px' />
                        </Anchor>
                    </Box>
                </Grid>
            </Box>
            <Box height={{ min: '65vh', max: '80vh' }}>
                {
                    (ids.map(id => (<ItemCart key={id} item={{ ...drinksObject[id], 'id': id }} />)))
                }
            </Box>

            <Box
                onClick={placeOrderBtnHandler}
                elevation='medium'
                round='medium'
                pad="medium"
                align='center'
                justify='center'
                background={{
                    color: '#EEFFAA'
                }}
                
            >
                <Text
                    size='xlarge'
                >
                    Pay
                </Text>
            </Box>
            {
                open && (
                    <Layer>
                        <Box
                            align="center"
                            justify="center"
                            gap="small"
                            direction="row"
                            alignSelf="center"
                            pad="large"
                        >
                            <Spinner />
                            <Text>Placing the order</Text>
                        </Box>
                    </Layer>
                )
            }
            {
                !open && orderNumber && successMsgOpen && (
                    <Layer>
                        <Box
                            align="center"
                            justify="center"
                            gap="small"
                            direction="row"
                            alignSelf="center"
                            pad="large"
                        >
                            <Text>Order Number</Text>
                            <Text size='large'>{orderNumber}</Text>
                        </Box>
                    </Layer>
                )
            }
        </Box>

    )
}


export default Cart;