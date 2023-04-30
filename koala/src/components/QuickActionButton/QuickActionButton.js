import { Box } from 'grommet';
// import { useState, useEffect } from 'react';

const QuickActionButton = ({label = 'Test' }) => {

    return (
        <Box
            pad={{top:'xxsmall', bottom:'xxsmall', left:'small', right:'small'}}
            round='xsmall'
            width={{min: '5rem'}}
            height={{min:'2rem'}}
            style={{fontSize:'15px', fontWeight: 'bold'}}
            elevation="medium"
            align='center'
            justify='center'
        >
            
            {label}
        </Box>
    );
};

export default QuickActionButton;