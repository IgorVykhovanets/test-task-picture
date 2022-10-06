import React, {FC} from 'react';
import {Link} from "react-router-dom";

import './picture.modules.scss'
import {IPicture} from "../../interfaces/picture.interface";
import {useAppDispatch} from "../../hooks/redux.hooks";
import {addLikePicture} from "../../store/slices/picture.slice";

const Picture: FC<{ picture: IPicture; }> = ({picture}) => {

    const {author, id, download_url} = picture;

    const dispatch = useAppDispatch();

    const likePicture = () => {
        dispatch(addLikePicture(picture));
    }

    return (
        <div className={'picture-block'}>
            <div className={'img-block'}>
                <img src={download_url} alt="picture"/>
            </div>
            <div className={'description-block'}>
                <h1>{author}</h1>
                <div>
                    <button className={'btn-left'}>
                        <Link to={`${id}/info`} state={id}>details</Link>
                    </button>
                    <button onClick={likePicture} className={'btn-right'}>Like</button>
                </div>
            </div>
        </div>
    );
};

export default Picture;