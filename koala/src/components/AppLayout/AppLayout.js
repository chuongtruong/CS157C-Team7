/* eslint-disable */

import Navbar from "../Navbar/Navbar";
import QuickAction from "../QuickAction/QuickAction";
import MainSection from "../MainSection/MainSection";
import Cart from "../Cart/Cart";
import { CartContext } from '../../App';
import { useContext } from 'react';
import { Page, PageContent } from 'grommet';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const AppLayout = () => {
    
    const [itemInCart, setItemInCart] = useContext(CartContext)
    console.log('length: ', itemInCart.length, itemInCart);
    return (
        <Router>
            <Page kind='narrow'>
                <Navbar itemCount={itemInCart.length}/>
                <PageContent>
                    <QuickAction />
                    <Routes>
                        <Route path="/" element={<MainSection />}/>
                    </Routes>
                    <Routes>
                        <Route path="/cart" element={<Cart />}/>
                    </Routes>
                </PageContent>
            </Page>
        </Router>
    );
};

export default AppLayout