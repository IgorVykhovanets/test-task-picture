import React, {FC} from 'react';

import './like.pictures.page.modules.scss';
import {useAppSelector} from "../../hooks/redux.hooks";
import Picture from "../../components/Picture/Picture";

const LikePicturesPage:FC = () => {

    const {like_pictures} = useAppSelector(state => state.picturesReducer);

    return (
        <div className={'like-pictures-block'}>
            {like_pictures && like_pictures.map(picture => <Picture key={picture.id} picture={picture}/>)}
        </div>
    );
};

export default LikePicturesPage;