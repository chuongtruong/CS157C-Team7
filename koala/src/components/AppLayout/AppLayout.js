/* eslint-disable */

import Navbar from "../Navbar/Navbar";
import QuickAction from "../QuickAction/QuickAction";
import MainSection from "../MainSection/MainSection";
import Cart from "../Cart/Cart";

import AppFooter from "../AppFooter/AppFooter";
import { Page, PageContent } from 'grommet';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const AppLayout = () => {
    return (
        <Router>
            <Page kind='narrow'>
                <Navbar />
                <PageContent>
                    <QuickAction />
                    <Routes>
                        <Route path="/tableID=:id/menu" element={<MainSection />}/>
                    </Routes>
                    <Routes>
                        <Route path="/tableID=:id/cart" element={<Cart />}/>
                    </Routes>
                </PageContent>
            </Page>
        </Router>
    );
};

export default AppLayout