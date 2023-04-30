/* eslint-disable */
import { Box } from 'grommet';
import { useState, useEffect } from 'react';
import QuickActionButton from "../QuickActionButton/QuickActionButton";
import { getAllDrinks } from '../../api/api';

const QuickAction = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCategories(result);
                },
                (error) => {
                    console.log("Error fetching categories");
                    setIsLoaded(true);
                    setError(error);
                }
            )
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