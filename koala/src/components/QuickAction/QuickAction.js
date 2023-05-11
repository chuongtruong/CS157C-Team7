/* eslint-disable */
import { Box } from 'grommet';
import { useState, useEffect } from 'react';
import QuickActionButton from "../QuickActionButton/QuickActionButton";
import { getAllDrinksCategories } from '../../api/api';

const QuickAction = () => {

    const [categories, setCategories] = useState(["All"]);

    useEffect(() => {
        Promise.all(getAllDrinksCategories()
        .then(values => {
            setCategories(["All", ...values.data])
        }))
    }, [])

    return (
        <Box
            // border={{size: 'xsmall' }}
            direction="row"
            gap='medium'
            margin={{top: 'small', bottom: 'xsmall'}}
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