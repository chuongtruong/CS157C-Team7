/* eslint-disable */
import { Box } from 'grommet';
import { useState, useEffect } from 'react';
import QuickActionButton from "../QuickActionButton/QuickActionButton";
import { getAllDrinksCategories } from '../../api/api';

const QuickAction = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        Promise.all(getAllDrinksCategories()
        .then(values => {
            console.log(values);
           setCategories(values.data)
        }))
    }, [])

    return (
        <Box
            // border={{size: 'xsmall' }}
            direction="row"
            gap='medium'
            margin={{top: 'small', bottom: 'medium'}}
            pad={{top: 'medium', bottom: 'medium', left: 'small'}}
            overflow={{horizontal:'scroll'}}
        >
            {
                categories.map((c,i) => (<QuickActionButton key={i} label={c}/>))
            }    
        </Box>
    );
};

export default QuickAction;