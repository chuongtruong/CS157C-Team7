/* eslint-disable */
import { useContext, useEffect, useState } from 'react';
import { Box, Spinner, Text } from 'grommet';
import { getAllDrinks } from '../../api/api';

import ItemMenu from '../Item/ItemMenu';
import { CategoryContext } from '../../App';

const Menu = ({handleCart}) => {
    const [items, setItems] = useState([]);
    const [itemsByCategory, setItemsByCategory] = useState([]);
    const {selectedCategory, setSelectedCategory} = useContext(CategoryContext);
    
    
    useEffect(() => {
        Promise.all(getAllDrinks()
        .then(values => {
            setItems(values.data)
            console.log(items);
        }))
    }, [])

    useEffect(()=>{
        let tempMenu = [];
        if(selectedCategory === 'All'){
            setItemsByCategory([...items]);
        } else {
            tempMenu =  items.filter(item => item.category === selectedCategory);
            setItemsByCategory([...tempMenu])
        }
    },[selectedCategory, items])

    return(
        <Box
            height={{max: '70vh'}}
            justify='start'
            align='center'
            overflow={{vertical:"scroll"}}
            direction="column"
            pad="small"
        >
            {
              itemsByCategory.length > 0 ? 
              (
                itemsByCategory.map(item => <ItemMenu handleCart={handleCart} key={item.id} data={item}/>)
              ) 
              : 
              (
                <Box>
                    <Spinner color={`graph-${3}`}></Spinner>
                </Box>
              )
          }
        </Box>
    );
};

export default Menu;