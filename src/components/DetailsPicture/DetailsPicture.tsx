import React, {FC} from 'react';

import './details.picture.modules.scss';
import {IPicture} from "../../interfaces/picture.interface";


const DetailsPicture: FC<{ details: IPicture; }> = ({details: {author, download_url}}) => {

    return (
        <div className={'details-picture-block'}>
            <h1>{author}</h1>
            <img src={download_url} alt="picture"/>
        </div>
    );
};

export default DetailsPicture;