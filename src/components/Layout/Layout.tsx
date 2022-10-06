import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import './layout.modules.scss';

const Layout:FC = () => {
    return (
        <div className={'footer'}>
            <NavLink to={'/pictures'}>Pictures</NavLink>
            <NavLink to={'/pictures/like'}>Like Pictures</NavLink>
        </div>
    );
};

export default Layout;