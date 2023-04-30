/* eslint-disable */
import {Header, Nav, Box, Grid, Avatar, Text, PageContent} from 'grommet';
import { Login } from 'grommet-icons';

const Navbar = () => {
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
                        ['', '', '','']
                    }
                    columns={
                        [
                            ['xxsmall', 'xsmall'], 
                            ['xsmall','medium'],
                            ['xsmall','medium'],
                            ['xxsmall', 'xxsmall']
                        ]
                    }
                    gap={{column:'small'}}
                    areas={[
                    { name: 'logo', start: [0, 0], end: [0, 0] },
                    { name: 'employeeName', start: [1,0] , end: [1,0]},
                    { name: 'employeeID', start: [2,0] , end: [2,0]},
                    { name: 'icon', start: [3,0] , end: [3,0]},
                    ]}
                    fill='horizontal'
                    align='center'
                >
                    <Box gridArea="logo"  hoverIndicator='true' >
                        <Avatar 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfrnYVoAEXKpHsZgYSydZC8SRgL-6XnZH_FhdR4I&s" 
                            round="xsmall"
                            />   
                    </Box>
                    <Box gridArea="employeeName" align='end' >
                        {/* <Text size='' weight='bold'>Chuong Tr</Text> */}
                    </Box>

                    {/* TODO: Need logic to handle show/hide employee ID */}
                    
                    <Box gridArea="employeeID" >
                        {/* <Text color='#808080' weight='bold'>015068898</Text> */}
                    </Box>
                    <Box gridArea="icon" align='end'>
                        <Login color='plain' size='medium' /> 
                    </Box>
                </Grid>
            </PageContent>
            
            

        </Header>

    );
};

export default Navbar