import React, {FC} from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './pictures.limit.page.modules.scss'

const PicturesLimitPage: FC = () => {

    return (
        <div>
            <div className={'limit-menu'}>
                <ul>
                    <li><NavLink to={'/pictures/limit=20'} state={20}>20</NavLink></li>
                    <li><NavLink to={'/pictures/limit=50'} state={50}>50</NavLink></li>
                    <li><NavLink to={'/pictures/limit=100'} state={100}>100</NavLink></li>
                </ul>
            </div>
            <Outlet/>
        </div>
    );
};

export default PicturesLimitPage;