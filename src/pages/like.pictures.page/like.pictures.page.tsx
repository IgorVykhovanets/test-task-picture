import React, {FC} from 'react';
import {useAppSelector} from "../../hooks/redux.hooks";
import Picture from "../../components/Picture/Picture";

const LikePicturesPage:FC = () => {

    const {like_pictures} = useAppSelector(state => state.picturesReducer);

    return (
        <div>
            {like_pictures && like_pictures.map(picture => <Picture key={picture.id} picture={picture}/>)}
        </div>
    );
};

export default LikePicturesPage;