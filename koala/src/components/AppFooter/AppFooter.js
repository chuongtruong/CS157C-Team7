/* eslint-disable */
import { Box, Grid, Anchor, Text, Avatar, Stack } from 'grommet';
import { Cart } from 'grommet-icons';
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from 'react-icons/fa';

const AppFooter = ({ table_number = '1', items, itemCount }) => {
    let navigate = useNavigate();
    const cartBtnHdler = () => {
        navigate(`/cart`)
    }
    return (
        <Box
            pad={{top: 'small', bottom: 'small', left: 'large', right:'large'}}
            round='small'
            height={{min:'6vh', max: '6vh'}}
            justify='center'
            alight='center'
            style={{position: 'absolute', minWidth: '98%', top:'100%'}}
        >
            <Grid
                rows={
                    ['','']
                }
                columns={
                    [
                        ['medium'],
                        ['medium'],
                        ['medium'],
                    ]
                }
                areas={[
                    { name: 'slogan', start: [0, 0], end: [2, 0] },
                    { name: 'profile1', start: [0, 1], end: [0, 1] },
                    { name: 'profile2', start: [1, 1], end: [1, 1] },
                    { name: 'profile3', start: [2, 1], end: [2, 1] },
                ]}

                round={{ size: 'medium', corner: 'bottom' }}
                align='center'                
            >
                <Box  gridArea="slogan"  align='center' justify='center'>
                     <Text weight='bold'>❤ Boba is life ❤</Text>
                </Box >
                <Box  direction='row' align='center' justify='center'>
                    <FaLinkedin 
                      style={{'cursor': 'pointer', 'font-size': '16px'}} 
                      onClick={()=>{window.open('YOUR_LINKEDIN_URL')}}/>
                     <Text size='15px' gridArea="profile1" > - Alicia Le</Text>
                </Box >
                <Box  direction='row'  align='center' justify='center'>
                    <FaLinkedin 
                        style={{'cursor': 'pointer', 'font-size': '16px'}} 
                        onClick={()=>{window.open('YOUR_LINKEDIN_URL')}}/>
                    <Text size='15px' gridArea="profile2" > - Christopher Tom</Text>
                </Box>
                <Box direction='row'  align='center' justify='center'>
                    <FaLinkedin 
                        style={{'cursor': 'pointer', 'font-size': '16px'}} 
                        onClick={()=>{window.open('YOUR_LINKEDIN_URL')}}/>
                    <Text size='15px' gridArea="profile2" > - Chuong Truong</Text>
                </Box>
            </Grid>
        </Box>

    );
};

export default AppFooter;