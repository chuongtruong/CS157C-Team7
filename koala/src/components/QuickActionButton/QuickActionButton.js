import { Box, Anchor } from 'grommet';
import { CategoryContext } from '../../App';
import { useContext } from 'react';

const QuickActionButton = ({label}) => {
    const {selectedCategory, setSelectedCategory} = useContext(CategoryContext);
    
    if(selectedCategory === label){

    }

    return (
        <Box
            pad={{top:'xxsmall', bottom:'xxsmall', left:'small', right:'small'}}
            round='xsmall'
            width={{min: '10rem'}}
            height={{min:'3.5rem'}}
            style={{
                fontSize:'18px', 
                fontWeight: 'bold',
                background: label === selectedCategory ? '#EEFFAA' : 'white'
            }}
            elevation="medium"
            align='center'
            justify='center'
            onClick={()=>setSelectedCategory(label)}
        >
                {label}
        </Box>
    );
};

export default QuickActionButton;