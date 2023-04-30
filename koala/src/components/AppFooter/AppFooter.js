/* eslint-disable */
import { Box, Grid, Anchor, Text, Avatar, Stack } from 'grommet';
import { Cart } from 'grommet-icons';
import { useMatch, useLocation, useNavigate } from "react-router-dom";

const AppFooter = ({ table_number = '1', items, itemCount }) => {
    let navigate = useNavigate();
    const cartBtnHdler = () => {
        navigate(`/tableId=${table_number}/cart`)
    }
    return (
        <Box
            elevation="large"
            pad={{top: 'small', bottom: 'small', left: 'large', right:'large'}}
            round='large'
            height={{min:'6vh', max: '10vh'}}
            justify='center'
            style={{position: 'absolute', minWidth: '98%', zIndex: '1', top:'90%'}}
            background={{color: 'white'}}
        >
            <Grid
                rows={
                    ['']
                }
                columns={
                    [
                        ['medium'],
                        ['medium'],
                    ]
                }
                areas={[
                    { name: 'tableNumber', start: [0, 0], end: [0, 0] },
                    { name: 'cartButton', start: [1, 0], end: [1, 0] },
                ]}

                round={{ size: 'medium', corner: 'bottom' }}
                align='center'                
            >
                <Box>
                    <Text weight='bold' gridArea="tableNumber" >Table: {table_number}</Text>
                </Box>

                <Box align='center'  direction='row' justify='end' gap='xsmall'>
                    {itemCount > 0 ? 
                    (
                        <Avatar  size='small' background="red">{itemCount}</Avatar>)
                    :
                        <></>
                    }
                    <Anchor onClick={cartBtnHdler}>
                        <Stack>
                            <Cart color='plain' size='30px' />
                        </Stack>
                    </Anchor>
                </Box>
            </Grid>
        </Box>

    );
};

export default AppFooter;