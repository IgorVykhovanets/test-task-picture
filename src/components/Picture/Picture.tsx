import React, {FC} from 'react';

import {IPicture} from "../../interfaces/picture.interface";
import './picture.modules.css'
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux.hooks";
import {addLikePicture} from "../../store/slices/picture.slice";

const Picture: FC<{ picture: IPicture; }> = ({picture}) => {

    const {author, id, download_url} = picture;

    const dispatch = useAppDispatch();

    const likePicture = () => {
        dispatch(addLikePicture(picture));
    }

    return (
        <div>
            <h1>{author}</h1>
            <div className={'img'}>
                <img src={download_url} alt="picture"/>
                <button>
                    <Link to={`${id}/info`} state={id}>details</Link>
                </button>
                <button onClick={likePicture}>Like</button>
            </div>
        </div>
    );
};

export default Picture;