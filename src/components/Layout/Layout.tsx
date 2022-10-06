import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const Layout:FC = () => {
    return (
        <div>
            <NavLink to={'/pictures'}>Pictures</NavLink>
            <NavLink to={'/pictures/like'}>Like Pictures</NavLink>
        </div>
    );
};

export default Layout;