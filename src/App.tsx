import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import './app.modules.scss';
import HomePage from "./pages/home.page/home.page";
import PicturesLimitPage from "./pages/pictures.limit.page/pictures.limit.page";
import DetailsPage from "./pages/details.page/details.page";
import LikePicturesPage from "./pages/like.pictures.page/like.pictures.page";
import PicturesPage from "./pages/pictures.page/pictures.page";
import NotFoundPage from "./pages/notfound.page/not.found.page";

const App: FC = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}>
                    <Route path={'/pictures'} element={<PicturesLimitPage/>}>
                        <Route path={'/pictures/limit=20'} element={<PicturesPage/>}/>
                        <Route path={'/pictures/limit=50'} element={<PicturesPage/>}/>
                        <Route path={'/pictures/limit=100'} element={<PicturesPage/>}/>
                    </Route>
                    <Route path={'/pictures/:id/info'} element={<DetailsPage/>}/>
                    <Route path={'/pictures/like'} element={<LikePicturesPage/>}/>
                    <Route path={'/pictures/like/:id/info'} element={<DetailsPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;