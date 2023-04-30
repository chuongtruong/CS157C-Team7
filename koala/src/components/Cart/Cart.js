/* eslint-disable */
import { Box, Anchor, Text, Button, Grid, Layer, Spinner } from 'grommet';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../App';
import { useParams, useNavigate } from 'react-router-dom';
import { Catalog, Close } from 'grommet-icons';
import ItemCart from '../Item/ItemCart';

const Cart = ({ item }) => {
    // maybe fetch data from the backend to see if there's any active order
    const { id } = useParams();
    const navigate = useNavigate();
    const [itemInCart, setItemInCart] = useContext(CartContext);
    const [ids, setIds] = useState([]);
    const itemsObject = {};
    const [open, setOpen] = useState(undefined);
    const [orderNumber, setOrderNumber] = useState(undefined)
    const [successMsgOpen, setSuccessMsgOpen] = useState(undefined);

    const [errMessage, setErrMessage] = useState(undefined)
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setIds(Object.keys(itemsObject));
        return
    }, [itemInCart]);

    (itemInCart.forEach((item) => {
        if (itemsObject.hasOwnProperty(item.item_Id)) {
            itemsObject[item.item_Id]['quantity'] += 1
            itemsObject[item.item_Id]['price'] = (item.price * itemsObject[item.item_Id]['quantity']).toFixed(2)

        } else {
            itemsObject[item.item_Id] = {
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
            body: JSON.stringify(itemsObject)
        };

        const response = await fetch(`http://localhost:5000/t=${id}/create2`, requestOptions);

        if (!response.ok) {
            setErrMessage(`Error! status: ${response.status}`)
        }

        const result = await response.json();

        await setOrderNumber(result["order_no"])
        setSuccessMsgOpen(true);
        await setTimeout(() => {
            setSuccessMsgOpen(undefined);
        }, 5000);

        console.log('result is: ', JSON.stringify(result, null, 4));
    };

    const closeBtnHdler = () => {
        navigate(`/tableId=${id}/menu`);
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
                        <Text size='xxlarge'><strong>TABLE {id}</strong></Text>
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
                    (ids.map(id => (<ItemCart key={id} item={{ ...itemsObject[id], 'id': id }} />)))
                }
            </Box>

            <Box >
                <Button round='medium' primary onClick={placeOrderBtnHandler} label="Place order" />
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