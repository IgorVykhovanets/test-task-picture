import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import Layout from "../../components/Layout/Layout";

const HomePage: FC = () => {
    return (
        <div>
            <Layout/>
            <Outlet/>
        </div>
    );
};

export default HomePage;