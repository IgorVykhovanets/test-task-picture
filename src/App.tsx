import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import './app.modules.scss';
import HomePage from "./pages/home.page/home.page";
import PicturesPage from "./pages/pictures.page/pictures.page";
import DetailsPage from "./pages/details.page/details.page";
import LikePicturesPage from "./pages/like.pictures.page/like.pictures.page";


const App: FC = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}>
                    <Route path={'/pictures'} element={<PicturesPage/>}/>
                    <Route path={'/pictures/:id/info'} element={<DetailsPage/>}/>
                    <Route path={'/pictures/like'} element={<LikePicturesPage/>}/>
                    <Route path={'/pictures/like/:id/info'} element={<DetailsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;