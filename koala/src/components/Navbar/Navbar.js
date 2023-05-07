/* eslint-disable */
import {Header, Anchor, Box, Grid, Avatar, Text, PageContent, Stack,} from 'grommet';
import { Cart } from 'grommet-icons';
import { useNavigate } from "react-router-dom";

const Navbar = ({itemCount}) => {
    
    console.log('itemCount: ', itemCount);
    let navigate = useNavigate();
    const cartBtnHdler = () => {
        navigate(`/cart`)
    }
    return(

        <Header
        sticky='scrollup'
        height={{min:'72px', max:'100px'}}
        elevation="large"
        round={{size: 'medium', corner:'bottom'}}
        justify='center'
        pad='small'
        >
            <PageContent>
                
                <Grid
                    rows={
                        ['', '', '']
                    }
                    columns={
                        [
                            ['1/2'], 
                            ['large'],
                            ['xxsmall'],
                        ]
                    }

                    areas={[
                        { name: 'logo', start: [0, 0], end: [0, 0] },
                        { name: 'shopName', start: [1,0] , end: [1,0]},
                        { name: 'cartIcon', start: [2,0] , end: [2,0]},
                    ]}
                    fill='horizontal'
                    align='center'
                >
                    <Box gridArea="logo"  hoverIndicator='true' >
                        <Avatar 
                            src="https://res.cloudinary.com/dcnrm0owf/image/upload/v1683323855/Logo_kg5tua.png" 
                            round="xsmall"
                        />   
                    </Box>
                    <Box gridArea="shopName" align='center' >
                        <Text size='30px' weight='bold'>Koala Tea</Text>
                    </Box>

                    <Box 
                        gridArea="cartIcon" 
                        align='center' 
                        direction='row' 
                        justify='center' 
                        gap='xsmall' 
                        >
                            {itemCount > 0 ? (
                            <Box>
                                <Text color='red'>
                                    {itemCount}
                                </Text>
                            </Box>

                            )
                        :
                            <></>
                        }
                        <Anchor onClick={cartBtnHdler} >
                            <Stack>
                                <Cart color='plain' size='30px'/>
                            </Stack>
                        </Anchor>
                </Box>
                   
                </Grid>
            </PageContent>
            
            

        </Header>

    );
};

export default Navbar